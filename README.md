# Catalyze Legal Docs

![status](https://codeship.com/projects/17469470-49e5-0133-1e8a-02da4d06d74f/status?branch=master)

The Catalyze Legal Docs exist to outline Catalyze, Inc's terms of service as well as other legal documentation pertaining to, but not restricted to, Catalyze products, software, web documentation or otherwise. These docs have been open sourced in order to help the health IT community grow and improve patient care through secure, usable software.

- The license for these docs can be found [here](https://github.com/catalyzeio/legal/blob/master/LICENSE.md%20)
- The contributing guidelines can be found [here](https://github.com/catalyzeio/legal/blob/master/CONTRIBUTING.md)

# Getting Started

The Catalyze Legal docs are built using [Middleman](https://middlemanapp.com/), a static site generator. Please follow the [installation instructions](https://middlemanapp.com/basics/install/) for Middleman before continuing.

Once you have Middleman installed and working you can complete the following to get a working copy of these docs on your local machine:

- `git clone https://github.com/catalyzeio/legal.git`
- `cd legal`
- `bundle install`

**Commands:**

- `rake build` generates the static HTML, CSS, and JavaScript files
- `rake run` allows you to view the site locally
- `rake sass` compiles styles changes
- `rake serve_static` runs a simple web server in the build directory