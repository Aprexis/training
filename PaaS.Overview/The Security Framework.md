# The Security Framework

In our Paas, the following security guidelines are implemented:


###Resricted access

####*All management infrastructure is behind VPN*


####*VPN access is restricted and monitored*

####*Root is disabled on all servers*



###Configuration Management

####*Salt*


####*Salt configurations are backed up daily / hourly*


####*Salt deployments are role based (not root)*


####*Security updates and patches applied regularly*


###Encryption

####*All physical disks are encrypted*



####*All internal traffic is encrypted and signed*



####*All containers / volumes are encrypted with customer specific keys*

Ortiz to clarify



####*Customer specific keys are not accessible to Catalyze*
Ortiz to clarify



###Networking

####*Firewalls are default deny*


####*Software firewalls also in place*

- iptables
- fail2ban

####*Default logins are disabled*


####*Rackspace monitoring services*


###Monitoring

####*Nagios*


####*Alerts and notifications*



###Logging

####*Logstash, ElasticSearch and Kibana*


####*Reports*


####*Alerts and notifications*



###Vulnerability Scanning & Management

####*Nessus*

#### *For customers - OpenVAS, resell Nessus(?)*


####*Alerts and notifications*


###Penetration testing

####*Metasploit?*

####*Alerts and notifications*


###Intrusion Detection & File integrity checking

####*OSSEC*


####*Alerts and notifications*


###Physical Security (via Rackspace)

Link to Rackspace approach to security [here](http://www.rackspace.com/security/management/) which is summarized as follows:

- Data center access limited to Rackspace data center technicians
- Biometric scanning for controlled data center access
- Security camera monitoring at all data center locations
- 24x7 onsite staff provides additional protection against unauthorized entry
- Unmarked facilities to help maintain low profile
- Physical security audited by an independent firm

*Security certifications and standards*

Rackspace adheres to the following information security and related certifications and standards.
- ISO 27002
- ISO 27001
- PCI-DSS (PAYMENT CARD INDUSTRY DATA SECURITY STANDARD)
- SSAE16
- SOC 1
- SOC 2
- SOC 3
- SAFE HARBOR
- CONTENT PROTECTION AND SECURITY STANDARD (CPS)






