<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPL License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/verygoodplugins/edd-appsmith-stats">
    <img src="https://wpfusion.com/favicon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">EDD Appsmith Stats</h3>

  <p align="center">
    Better reporting for Easy Digital Downloads
    <br />
    <a href="https://drunk.support/creating-an-analytics-dashboard-for-easy-digital-downloads-using-appsmith-and-chatgpt/"><strong>Read the blog post »</strong></a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

This project attempts to provide a better reporting solution for Easy Digital Downloads than what is built into the plugin.

It can be [imported into Appsmith](https://docs.appsmith.com/advanced-concepts/version-control-with-git/import-from-repository) (either cloud or self-hosted) and connected to your own WordPress database to provide real time business intelligence reports based on your sales data.

![Example][product-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

1. Either sign up for [a free Appsmith account](https://www.appsmith.com/) or install the package on your own server. 
2. [Fork this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo).
3. Follow [this guide](https://docs.appsmith.com/advanced-concepts/version-control-with-git/import-from-repository) to import your repository to your Appsmith workspace.
4. Head to Datasources &raquo; Easy Digital Downloads and enter the connection information to your database. You will probably need to white-list Appsmith's IP addresses. ![Database connection](https://drunk.support/wp-content/uploads/2023/03/appsmith-database-setup.jpg)

5. Choose a page under Pages and you should see your data populated. If not, check the status bar for errors (for example custom table prefixes will need to be updated in the SQL queries)
6. Have fun! 📈🥳


<!-- USAGE EXAMPLES -->
## Contents

The current list of pages and charts is:

### Customers and Revenue

* New customers by month
* New customers percent change year-over-year
* Revenue - new vs. recurring
* Product sales by volume
* Product sales by revenue

### MRR and Growth

* Current month, net new MRR breakdown
* MRR overview
* Subscribers overview
* Growth rate

### Renewals and Cancellations

* Renewal rate last 12 months
* Renewal rate last month
* Estimated recurring revenue next 30 days
* Estimated recurring revenue next 365 days
* First year renewal rates
* Renewal rates by month
* Renewal rates by month of year

### Refunds

* Refund rate average 12 months
* Refund rate last month
* Refund rates by month
* New customer refund rates by year

### Software licensing

* Top 20 license IDs by number of site activations

### Support

* New customer support request rates, first 30 days vs. first year (requires Gravity Forms and some query tweaking)

### Sites Stats

* These charts are usage stats unique to WP Fusion


## Examples

<img src="https://drunk.support/wp-content/uploads/2023/03/mrr-by-month-with-summary.jpg" width="45%"></img>
<img src="https://drunk.support/wp-content/uploads/2023/03/profitwell-vs-appsmith-more-accurate-2048x1354.jpg" width="45%"></img>
<img src="https://drunk.support/wp-content/uploads/2023/03/revenue-new-vs-recurring.jpg" width="45%"></img>
<img src="https://drunk.support/wp-content/uploads/2023/03/renewals.jpg" width="45%"></img>
<img src="https://drunk.support/wp-content/uploads/2023/03/customers-by-month.jpg" width="45%"></img>
<img src="https://drunk.support/wp-content/uploads/2023/03/sites-stats-2048x1890.jpg" width="45%"></img>



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Appsmith

![](https://raw.githubusercontent.com/appsmithorg/appsmith/release/static/appsmith_logo_primary.png)

This app is built using Appsmith. Turn any datasource into an internal app in minutes. Appsmith lets you drag-and-drop components to build dashboards, write logic with JavaScript objects and connect to any API, database or GraphQL source.

![](https://raw.githubusercontent.com/appsmithorg/appsmith/release/static/images/integrations.png)

### [Github](https://github.com/appsmithorg/appsmith) • [Docs](https://docs.appsmith.com/?utm_source=github&utm_medium=social&utm_content=appsmith_docs&utm_campaign=null&utm_term=appsmith_docs) • [Community](https://community.appsmith.com/) • [Tutorials](https://github.com/appsmithorg/appsmith/tree/update/readme#tutorials) • [Youtube](https://www.youtube.com/appsmith) • [Discord](https://discord.gg/rBTTVJp)



<!-- LICENSE -->
## License

Distributed under the GNU GPL v3. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Jack Arturo - [@verygoodplugins](https://twitter.com/verygoodplugins) / [drunk.support](https://drunk.support)

Project Link: [https://github.com/verygoodplugins/edd-appsmith-stats](https://github.com/verygoodplugins/edd-appsmith-stats)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/verygoodplugins/edd-appsmith-stats.svg?style=for-the-badge
[contributors-url]: https://github.com/verygoodplugins/edd-appsmith-stats/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/verygoodplugins/edd-appsmith-stats.svg?style=for-the-badge
[forks-url]: https://github.com/verygoodplugins/edd-appsmith-stats/network/members
[stars-shield]: https://img.shields.io/github/stars/verygoodplugins/edd-appsmith-stats.svg?style=for-the-badge
[stars-url]: https://github.com/verygoodplugins/edd-appsmith-stats/stargazers
[issues-shield]: https://img.shields.io/github/issues/verygoodplugins/edd-appsmith-stats.svg?style=for-the-badge
[issues-url]: https://github.com/verygoodplugins/edd-appsmith-stats/issues
[license-shield]: https://img.shields.io/github/license/verygoodplugins/edd-appsmith-stats.svg?style=for-the-badge
[license-url]: https://github.com/verygoodplugins/edd-appsmith-stats/blob/master/LICENSE
[product-screenshot]: https://drunk.support/wp-content/uploads/2023/03/growth-rate-2048x1211.jpg