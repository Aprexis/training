The HIPAA Security Rule operationalizes many of the standards set out in the Privacy Rule. Specifically the Security Rule spells out, in various levels of detail, the ways in which electronic protected health information, or ePHI, needs to be protected. The Security Rule, despite setting implementation specifications, isn’t all that specific most of the time.

The Security Rule is the section of HIPAA that gets most talked about by vendors like us and others with a background in technology. Many times developers and vendors focus specifically on the areas within the Security Rule to achieve compliance. Even with this area of focus, the specific technical controls only make up a minority of the HIPAA Security Rule.

The HIPAA Security Rule can be broken down into the three main categories below.

## Administrative

This is actually the largest category of safeguards in the HIPAA Security Rule, accounting for over 50% of the rule. These are not server setting or specifics around technology, they are policies and processes that need to be followed to safeguard data. The biggest and most important area covered in this section, at least for people starting out on the journey towards compliance, is the risk assessment. A risk assessment should be the first step for most organizations wanting to be compliant, and covers documenting architecture, identifying risks related to the protection of PHI, and mitigating those risks.

When you use Datica, we cover much of risk environment for you as we manage many aspects of the architecture. We work with you to define areas that you need to address in terms of risk, and will work closely with you if and when you decide to go forward with a full audit.

There are other areas in this category including workforce security, contingency planning, training, and a few others, all of which are necessary to examine and address, but the risk assessment is really the big one in this category.

## Physical

This category is easy to understand as it’s the physical aspect of securing systems that have access to ePHI. It breaks out to workstations, facilities, and different portable and mobile media. Most data centers today, including the ones that we use at Datica, more than meet the requirements in the Security Rule for facilities. Typically compliant Infrastructure-as-a-Service vendors, like AWS and Firehost, cover this category of HIPAA for you.

Areas people sometimes neglect are office security and workstation security. These aren’t hard safeguards to meet but they likely involve some process changes, like not allowing cleaning people into your office without supervision, keeping doors locked and tracking visitors, encrypting employee computers, and using workstation firewalls. We control and monitor access at our offices using both keys and uniquely-assigned fobs.

## Technical

The technical category of safeguards is usually what people think of when they think of securing ePHI. The biggest areas are encryption, access controls, and auditing. With encryption, it has to be end to end, and it has to be at rest. At rest is typically harder. We have found that we need to use high performance SSD drives to improve performance issues that arise with encrypting data at rest.

For access controls and logging, basically all activity of servers should be logged and those logs should be monitored with appropriate alerting. All API calls should also be logged, including what was accessed (with ePHI at times), by whom, and when. We have spent a lot of time building a powerful and flexible unified logging solution to meet the requirements in this area.

Beyond the three areas above, there are a few miscellaneous requirements in the security rule. Those additional requirements relate to signing business associate agreements and having policies to, well, manage your policies.

That's a very high, high-level overview of the Security Rule. You can see pretty detailed information about the Security Rule, and how Datica addresses the different specifications, on [our HIPAA page](https://hipaa.datica.com/).
