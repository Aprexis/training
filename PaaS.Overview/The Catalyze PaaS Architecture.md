# The Catalyze PaaS Architecture

*Source: Mike Ortiz*


##Introduction
The Catalyze PaaS offering is comprised of 4 distinct APIs, a management pod and a number of consumer pods. The consumer pods house one or many consumer apps and initially will be deployed in Rackspace. As a fast follow different cloud providers will be added - namely AWS and potentially Digital Ocean  This is possible through a driver layer which will interface with multiple cloud vendors in which we will place consumer pods (there might some possible learnings from something like [consul](http://consul.io) for this. The goal of the system is to be HIPAA and HITRUST compliant and enable the apps that run within them to inherit the same level of compliance. There are monitoring and logging components baked into each app stack along with DR capabilities which will be offered to customers at an additional fee. Users may disable these at creation time if they do not require a HIPAA compliant environment, for instance if it is supposed to be a dev environment.

At an aggregate level, the PaaS looks like this:

                                        +------------------------+
                                        |    Datacenter (AWS)    |
            +-----------------+         +-+----------------------+
            |                 |         | +--------------------+ |
            |                 |         | |    Customer Pod    | |
            |   Management    |         | +--------------------+ |
            |       Pod       |         | +--------------------+ |
            |                 |         | |    Customer Pod    | |
            |                 |         | +--------------------+ |
            |                 |         |          ...           |
            +-----------------+         +------------------------+

    +--------------------------+
    |   Datacenter (Rax)       |
    +-+----------------------+-+
    | +----------------------+ |
    | |      Customer Pod    | |
    | +----------------------+ |
    | +----------------------+ |
    | |      Customer Pod    | |
    | +----------------------+ |
    |           ...            |
    +--------------------------+


Each of these components are explained in more detail in the following sections.
