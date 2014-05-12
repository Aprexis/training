# Communicating Between Containers

##HiProxy and Saucy

The initial thought was to implement a solution that would:
- Have the following dependencies:
    - serf
    - etcd
    - fleet
    - systemd
- Be installed on a per machine or per tenant basis
- Services would be auto-discovered and managed (using Serf)
- Scheduled and managed (using fleet)
- Encryption and certifications would be used for higher security but would be implemented as an optional add-on (Saucy)
- Port collision problems would be handled via bridges

**Advantages**
- All the containers would ever talk to would be hiproxy (only publicly exposed service)
- hiproxy could be deployed (ideally on a per tenant basis) so that there would be no intermingling of traffic

**Disadvantages**
- Fleet is too young and seemed to generated a lot of compatibility and deployment issues
- Solution approach was too "monolithic" - deployment required fleet which required systemd and systemd does not deploy / work well with Ubuntu 14.04 etc etc.

The immediate term approach we chose to go down the path of was designed by Adam Leko and called LoProxy. Intent of loproxy was to modularize the above implementation and simplify communication of networking setting etc.

##LoProxy
The overview - design is available [here](https://docs.google.com/a/catalyze.io/document/d/1LmuRmtss_Vm_0dneYo3CT4zIRrXr1znhrsBlJbeYM8I/edit)

The implementation - is available here [here](https://github.com/catalyzeio/paas-engineering/issues/85)
