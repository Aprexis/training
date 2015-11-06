# Catalyze HIPAA Training Docs

![status](https://codeship.com/projects/17469470-49e5-0133-1e8a-02da4d06d74f/status?branch=master)

This is an overview training of HIPAA, with coverage of key definitions and provisions for the handing of HIPAA-relevant data. The material in this book is intended for individuals who work for organizations that provide technology and technology-enabled services to health systems, payers, physicians, pharma, and other healthcare organizations. It leans more heavily on the use of modern, cloud-based technologies than traditional client side software.

- The license for these docs can be found [here](https://github.com/catalyzeio/legal/blob/master/LICENSE.md%20)
- The contributing guidelines can be found [here](https://github.com/catalyzeio/legal/blob/master/CONTRIBUTING.md)

# Getting Started

The Catalyze HIPAA Training docs are built using [Middleman](https://middlemanapp.com/), a static site generator. Please follow the [installation instructions](https://middlemanapp.com/basics/install/) for Middleman before continuing.

Once you have Middleman installed and working you can complete the following to get a working copy of these docs on your local machine:

- `git clone https://github.com/catalyzeio/legal.git`
- `cd legal`
- `bundle install`

**Commands:**

- `rake build` generates the static HTML, CSS, and JavaScript files
- `rake run` allows you to view the site locally
- `rake sass` compiles styles changes
- `rake serve_static` runs a simple web server in the build directory