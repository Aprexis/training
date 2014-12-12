# Logging

##Key Points

* Log and retain all system and application logs.
* Any logs that might contain ePHI should be encrypted and utilize compliant machines.

##Logging

Logging is an important part of the HIPAA Security Rule, but there not prescriptive controls around logging. According to HIPAA Security Rule - 164.312(b):

> Implement hardware, software, and/or procedural mechanisms that record and examine activity in information systems that contain or use electronic protected health information.

HIPAA goes to say, in slightly more specific terms, that covered entities and business associates (subcontractors) implement:

> Procedures for monitoring log-in attempts and reporting discrepancies.

Put simply, what HIPAA boils down to is that all access, both success and failures, to electronic protected health information (ePHI) should be monitored and logged and be accessible in the case of a breach. You should be able to go back and investigate what data was accessed, conduct forensics to try to figure out how that data was accessed in an unauthorized way and who may have been the person who accessed it or the entity that accessed it, and determine if/how data was altered. It's the who, what, when, and how of access that needs to be audited.

Logging is so important because the integrity and availability of data is so important in healthcare, and in HIPAA. When ePHI data changes is deleted or is accessed in some unauthorized way, that represents a breach to HIPAA and is something that needs to be tracked both proactively using alerting and monitoring, as well as reactively or retroactively to investigate when an unauthorized breach might have taken place.

The types of logs should include system and network logs. This is basically what goes into syslog on a *nix box and, ideally, the server has detailed logging turned on. Next, any  application access and database access should be logged. The metadata (when, what, where, etc) associated with log data is extremely valuable.

If you log enough data, you can proactively identify when a breach may have occurred with intelligent alerting. Once logging is properly configured, alerts are relatively easy to add. You can go back and investigate and dive deeper into what that the breach might be and ideally not just say "we store 100,000 patient records and our database was breached, so 100,000 patient records were disclosed improperly". With good logging you should be able to say this one, individual record was breached and additionally maybe even this one specific piece of the record was breached (and how it might have or might not have been altered). That's some of the power of good logging.

##Catalyze Unified Logging Service

The approach that we take at Catalyze is to log every interaction with our systems - all API traffic - application logs, , database logs, and system logs. For companies that use us as a Platform as a Service (PaaS), we give them one endpoint so that whatever application logs they are generating, we can store those for them; we'll also help them determine what data they should be capturing in application logs. We also integrate file integrity logs from OSSEC into our logs. We store this unified log in an encrypted, dedicated store for each customer, and we provide customers with views into, and the ability to query, that log data.

It's a very powerful unified logging service, one that's HIPAA-grade and meant for ePHI. The service sits within our environment right next to your application and we  combine your log data that we're already collecting on the servers and network traffic. We pull all that into one place and give you a managed console for logging.
