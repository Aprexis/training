# The PaaS Customer Pod

### The Consumer Pod
The consumer pod is is where developer's application resides. And looks like this.

    +----------------------------------------------+
    |               CUSTOMER POD                   |
    |                                              |
    |  +---------------+  +-------------------+    |
    |  |   Firewall    |  |  Load Balancer    |    |
    |  +---------------+  +-------------------+    |
    |                                              |
    |                          App Servers         |
    |                                              |
    |                       +-------+ +-------+    |
    |    Nagios             |       | |       |    |
    |   +-------+           |       | |       |    |
    |   |       |           +-------+ +-------+    |
    |   |       |                                  |
    |   +-------+             Database Servers     |
    |                                              |
    |    Logging            +-------+ +-------+    |
    |   +-------+           |       | |       |    |
    |   |       |           |       | |       |    |
    |   |       |           +-------+ +-------+    |
    |   +-------+                                  |
    |                         Block Storage        |
    |    Backup                                    |
    |   +-------+           +-------+ +-------+    |
    |   |       |           |       | |       |    |
    |   |       |           |       | |       |    |
    |   +-------+           +-------+ +-------+    |
    |                                              |
    +----------------------------------------------+


The key requirements for the consumer pods are as follows:


####Datacenter neutral

In a physical sense, a consumer pod is equivalent to some geographical grouping of machines (datacenter). It is our intention to be datacenter neutral so that we shouldn't care whether the customer prefers AWS or Rax. We might guide them one way or the other depending on their requirements. For example, if a customer wanted a hardware firewall, then Rax would be the choice. Additionally, the customer might want (and for compliance reasons) it might make sense for us to deploy them across geographical reasons for disaster recovery (US-East and US-West). It should also be possible for us to deploy a customer across Rax **and** AWS (there are no good use cases to support this need but the design should allow for this as well).

####Full Application Stack
The application is inclusive of VPN/firewall, load balancers, application container(s), database container(s) backed by block storage, a logging container which serves up a JSON endpoint for log data to be sent, a consumer API container and a monitoring container. Note that the logging and monitoring containers will be deployed whether the customer requests it or not since it is necessary for us to support and maintain the customer app. However, access to those will **not** be given to the customer without additional payments. Thus access / or lack of access must be definable during deployment and must also be enabled via an API call alone (no re-deploy). The APIs to manage the application stack must therefore be comprehensive as well to support this full stack.


####Scheduling rules
Within the set of machines that are dedicated to us, we will have a few key rules enabled by default. Additional rules and logic might be added later with the key consideration that any rules and algorithms must be simple to understand (if it needs a scientific calculator to explain a simple example, that's a bad thing). Key rules are:
- Anti-affinity - A customer’s first app container (app01) cannot be placed on the same physical host as their second app container (app02).
- Bidding - Choice of where a new customer's app is to be deployed will be decided by a bidding mechanism
- Choice of winner - Will be driven by metrics collected (and some weighted / minimum etc. calculation of those metrics) from the machines


####Zero Access / Zero Trust
The goal should be that we should not be able to access any of the customer's data even if we wanted to. At the very least, the app server(s), db servers(s) and block storage must be inaccessible to us either via encryption or other means. The data will be securely encrypted from end to end using on-disk encryption as well as SSL when in transit. This creates an obvious support dilema. In order to support the user it may become necessary for Catalyze to access containers within a user’s app stack. This will be delegated by the user by generating a temporary, timed, key for access by our support teams.
