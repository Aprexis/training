# Risk Asssessment

##Key Points
* Conduct risk assessments annually, or with major changes to your infrastructure and applications.
* Risks and vulnerabilities will exist, so what is important is mitigating them with other controls.

##Risk Assessments
Probably the first thing to consider when going down the path of compliance, or really the first thing to think about regarding security holistically, is to perform a risk assessment. A risk assessment is a requirement of HIPAA and it's really the first thing that should be done. The reason it's so important is because it frames many of the rest of the decisions you make regarding your security posture.

In the words of HHS:

> Conducting a risk analysis is the first step in identifying and implementing safeguards that comply with and carry out the standards and implementation specifications in the Security Rule. Therefore, a risk analysis is foundational...

From the HIPAA Security Rule:

> Conduct an accurate and thorough assessment of the potential risks and vulnerabilities to the confidentiality, integrity, and availability of electronic protected health information held by the [organization].

As part of the risk assessment you need to outline your core technology infrastructure. In that process you should do an inventory of all the systems that you manage. Then you need to map out which of those systems process, transmit, or store electronic protected health information (ePHI). For us that's the starting point for risk management strategy and a risk assessment.

The next step in a thorough risk assessment is to assess the various threats and vulnerabilities to your environment, and ultimately to the integrity of ePHI. These can be anything from physical threats, like breaking into a data center or a fire or natural disaster in your data center, to malicious software, like hacking into a system, to internal malfeasance, like an employee going rogue and breaking into your systems. You need to map out all of the possible threats and vulnerabilities.

For us we map vulnerabilities specifically to HIPAA rules related to protection of ePHI. For each perceived vulnerability, we assess the likelihood and impact - with the product of those two factors producing the risk level. The impact is the potential a risk leading to a PHI breach - or a loss of PHI, because there are issues around integrity of data in HIPAA. We also determine if that risk has been mitigated in some way by our current security posture and controls.

Once you know the infrastructure, risks, and threats/vulnerabilities, the next steps is to mitigate the risks that exist and have not been fully mitigated by current security controls. Not all risks can be 100% mitigated. There are typically gaps in almost all risk assessments, because if you do a risk assessment you will get a ton of different variables - not just the obvious ones at the top of your head right now. And from those risks, there are typically are some gaps that need to be mitigated. It's imperative that you come up with a mitigation strategy. What can you do that is reasonable and appropriate to mitigate risks to ePHI? From there you need to implement those mitigation strategies and documenting thoroughly. Documentation is not fun but has to be done in a compliant industry like healthcare.

##Risk Assessments at Catalyze

At Catalyze, we follow all of the steps above using a spreadsheet with sheets for each step. That's the way that we do ours, and we do ours both annually as well as on an ongoing basis, when there are changes to our core infrastructure. We use NIST standards ([NIST800-30](http://csrc.nist.gov/publications/nistpubs/800-30/sp800-30.pdf) and [800-26](http://www.nist.org/nist_plugins/content/content.php?content.32)) as the model for our [risk assessment](https://catalyze.io/hipaa#security-management-process---164.308a1i).

We're more than happy to share the spreadsheets and the steps and processes that we use to do that. If you want to reach out to us we can help you with that process. But that really is the first step that you need to do because that helps you really understand where your major gaps are. And which things you need to do, to implement or mitigate the risk that you have within, and the threats that you have to your infrastructure and to PHI -  that you're storing a processing or whatever it might be for covered entity.
