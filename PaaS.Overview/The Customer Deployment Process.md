# The Customer Deployment Process

Customers exoect a simple, seamlesss deployment process. Again Heroku has set the bar in terms of easy of deployment via the git push approach. This does require that the hosting provider know the credentials of the customer (after all these could be part o the repo - hopefully not but it has been known to happen).

The goal here is to simplify deployment to mimic heroku with the added capabilities around:
- shell access: but limited to specific sets of commands that do not allow the capability to break out of the container.
- Limited access: even if someone were to break out of the container, root account has been disabled. Only specific named accounts are created with elevated access.
- Security: enhanced security to meet HITRUST and HIPAA requirements
- Compliance: Documentation and adherence to policies and guidelines related to security and policies (such as password rotation, default accounts disabled etc.)
- Added services: logging, monitoring, intrusion detection, vulnerability scanning etc.


Even with these in place, the developer flow should be as simple as possible with the following steps:

1. Application definition: Leverages Heroku buildpacks with some additional specifications
2. Git push to Catalyze (from GitHub or Bitbucket for now, more to be added later)
3. Upload data (assets will be managed via CDN or S3 and is the developers responsibility)
4. Add services as needed: logging, monitoring etc.
5. Scale as needed

Each of these steps are explained in more detail in the following sections
