# Solutions Engineer: Part 1

Judging is one of the *least* considered aspects of running any hackathon and where the hacker experience begins to dwindle. Hackers become restless when sponsors do not show up to their tables and sponsors become impatient waiting for the list of projects they need to judge for their prize categories.

> "As a sponsor, I need a list of all of the projects I need to judge that include their submission name, table number, as well as which prize category of mine they applied for."
>
> *Sean Victory, LA Hacks 2019 Sponsor*

Thanks to Algolia's [InstantSearch](https://www.algolia.com/products/instantsearch/), I have developed a resource for hackathon organizers and sponsors to quickly view project-related information and filter hackathon submissions by prize category.

## ✨ Features

* Filter submissions by **prize category**. The prize categories are sorted alphabetically so users can easily recognize their prize categories among a sea of others.

* Search results are responsive and formatted for mobile and tablet layouts. Sponsors usually carry their phones or tablet in order to judge submissions, not a computer. I designed an interface to accomidate for screens of all sizes by dynamically resizing search result elements to fit the screen.

* The search results are sorted by table number in *ascending* order so judges can take the most efficient route to view projects without needing to backtrack.

* Duplicated instances of projects submitted for different prize categories are removed by turning on the `deduplication` setting in the Dashboard and sorting it by each project's table number. `Table number` was chosen as the attribute to determine if a project is unique over `Submission Title` because two submissions could potentially have the same name, but no two submissions could have the same table number.

* Project headings are dynamically generated to include the `Submission Url`. Clicking on the submission title takes the user to the official Devpost submission, where they can view the project in more detail.

* The submission's description is displayed in each search result to provide users with a glanceable summary of the project.


## 📋 Getting Started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Open http://localhost:3000 to see the website.

## 💭 Next Steps

In the future, I would love to include the functionality to upload a CSV through the front-end. It would make using the website for other hackathons a breeze, as I would be able to "hot-swap" different CSVs to sort the data as needed.

I am excited to use this tool in the upcoming hackathons I attend as it helps sponsors, organizers, and hackers! Sponsors get a list they can use to quickly inform themselves of the number of submissions for their category, as well as click on each submission to view it in greater depth. Organizers get a centralized location to send people the information they need for Judging Expo, and hackers are able to see which table they are assigned to for presentations by searching their project name in the search bar.

## 📝 Feedback

### Take Home Assignment

I was pleasantly surprised to see how **well documented** and **accommodating** Algolia's resources are. Documents were visually formatted in a way that conveys complex information in a manner understandable to people of all skill levels. The InstantSearch [Widget Showcase](https://www.algolia.com/doc/guides/building-search-ui/widgets/showcase/js/) allows new users to quickly understand how to implement widgets they recognize, but may not know the name of. It does a great job removing the barrier to entry of using Algolia.

The instructions were concise and informative. Including links to the documentation mentioned at each point is a *very* helpful touch when following each step.

Some may get confused understanding where they are to submit each part of the assignment. A "Deliverables" heading in the assignment email consisting of the locations and formats the deliverables are to be provided in would help remove some of the ambiguity.

I noticed that part of the Basketball dataset Algolia provided was incorrect. I submitted a [Pull Request](https://github.com/algolia/datasets/pull/7) on the GitHub repository with the corrections.

### The Interview Process

It is quite clear that Algolia's employees embody the company's core values: **grit**, **trust**, **care**, **candor**, and **humility**. Everyone I have interacted with thus far has displayed each of these qualities. Responses have been timely and informational and instructions have been detailed and accessible.

---

# Solutions Engineer: Part 2

Responces for Part 2 of the Solutions Engineer Take Home Assignment can be found [here](https://github.com/seanvictory/algolia-solutions-engineer-responces/blob/master/Part2-responces.md)
