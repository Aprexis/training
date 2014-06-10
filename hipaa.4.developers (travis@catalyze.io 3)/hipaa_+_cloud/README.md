# HIPAA + Cloud

##Key Points

* New rules require all cloud vendors that maintain, process, or transmit ePHI to sign BAAs.
* Paradigm shifts in technology mean that each business associate likely has 1 or more subcontractors (APIs, hosting, blank-as-a-service).
* There is a complete lack of transparency when it comes to compliance and cloud, which only serves to hurt adoption of cloud in healthcare.
* You will get asked by healthcare organizations for detailed information about how your compliant, so understanding cloud and compliance going in will help you.

##HIPAA + Cloud = Murky

The HIPAA Omnibus Rule that went into effect in 2013 changed the landscape of HIPAA. It created a new name for business associate called a "subcontractor". In much the same way a business associate processes, transmits, or stores ePHI for a [covered entities](http://catalyze.io/blog/compliance/hipaa-101-a-primer/), a subcontractor processes, transmits, or stores ePHI for a business associate.

It's easier to just consider them a business associate of a business associate. And subcontractors are required to sign business associate agreements (BAAs). We get asked a lot about subcontractors and BAAs by customers and prospects.

In creating this new category of entities, the Omnibus Rule accounted for the paradigm shift in technology development and cloud computing. The most commonly used example of a subcontractor is a cloud hosting provider, like Catalyze. But there are many other types of services that could be considered subcontractors. As data and services are exposed using web services, typically APIs, there is a huge number of BLANK as a Service offerings that have cropped up. Many modern applications utilize third party APIs for features and functionality. Using simple to consume APIs, modern applications can tap into databases, messaging (SMS or Push or email or Voice), metrics, logging, customer support, data sources, backup, and on and on. When applications use APIs, depending on the service, certain data is passed back and forth to third parties. According to the new Omnibus Rule, if ePHI data is passed to these 3rd party web services, those services are subcontractors and required to sign BAAs. Since things like IP addresses, when combined with information like a providers name, date of service, payment for healthcare service, can be considered ePHI, this gets very murky, very fast.

What happening now are that chains of BAAs are being developed. These chains typically go from covered entity to a business associate to any number of subcontractors for that business associate. At the center is the covered entity. Branching out from there into business associates and then subcontractors, sort of like a tree. With this chain of relationships and BAAs, all entities are typically taking on some risk, and have certain obligations under HIPAA.

Here's a fake, but very typical example, of a chain of BAAs. Hospital A wants to add telemedicine so that its patients can access providers. It decides to go with Vendor A, which has a software platform for telemedicine. Vendor A signs a contract and a business associate agreement with Hospital A. Vendor A runs its software on servers from a cloud infrastructure provider called Cloud 1. Cloud 1 is a subcontractor of Vendor A, so Cloud 1 and Vendor A have their own business associate agreement. It's very likely that Hospital A will want to review the BAA that Cloud 1 and and Vendor A have, to assure all risk and technical requirements of HIPAA are properly covered.

Next we lay out some definitions for cloud computing.
