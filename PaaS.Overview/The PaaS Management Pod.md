# The PaaS Management Pod


### The Management Pod
The management pod is the central management point of the entire system. It controls the consumer pods as well as the app stacks. The management and consumer APIs consume both of these and proxies data from the backend APIs. In a zero-access scenario we only keep meta-data at the management level. This data is for billing purposes and accounting. All keys, passwords and private configuration data will be stored within the self-contained stack API and not at this level. It’s design is derived from the consumer pods but has additional services as this app is more complex than consumer’s apps.

This layer will also host the authentication service, backed by LDAP. [FIXME: add more info about auth service once defined.]

The key requirements for the consumer pods are as follows:

####Highly Available
Since this is the single / central hub for all pod management. Availability, backup and disaster recovery are core and **must** be enabled.

####Queue driven
Since this is the hub through which all customer pods or application deployment requests come through, we need to be ready to handle large volume of requests. Thus, we need to be able to queue requests, spawn container generation threads and manage synchronous (do this before the next) and asynchronous requests (and track and log these, of course). This is described in more detail in the PaaS Api section.

####Zero Access Enabled
As much as possible (and ideally no) keys and credentials will be stored at this level. [FIXME: based on @mortiz update]

####Manage global services *eg.* IDS etc.
There will be global services that we need to run to ensure the overall security of our PaaS such as intrusion detection etc. These services (which do **not** look inside the customer applications) but manage overall machine level (down to the Customer Pod) security should be managed from here.

####Aggregated logging, metrics and monitoring
Overall logging, metrics and monitoring services need to be enabled at this level for us to understand the health and activity at the individual Customer Pods. You can imagine this to be an aggregator of the individual Customer Pods log, monitoring and metrics data.

####Connectivity to third party services
Is this here or at the Customer Pod level? [FIXME: @adam]
