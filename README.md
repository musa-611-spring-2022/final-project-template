# MUSA 611 Final Project: PLA Development Risk 

## Project Proposal

My final project intends to create a website related to the Smart Cities Practicum (MUSA 801/CPLN 791) project I am currently participating, in collaboration with Gillian Xuezhu Zhao and Max Masuda-Farkas.


The client for this project is [Philadelphia Legal Assistance](https://philalegal.org/), who are in need of a web-based interface and development risk index model they can use to better allocate their resources to help Philadelphia residents that have tended for vacant lots in their neighborhoods (and might have a legal claim for these) fend off the pressure of real estate development that is expanding into lower-income and majority minority neighborhoods in Philadelphia.
Consequently, the role of my practicum team can be summarized in four goals:


1. Design an algorithm that is able to predict which properties in the City of Philadelphia are at greatest of disposition and development, using zoning permits as the dependent variable, and a proxy for development risk, on which to train our model.

2. Aggregate other pertaining data at the property level that describes the different factors that can affect the development of properties in Philadelphia, such as their vacancy, whether they are delinquent for real estate taxes, the amount of debt they are under, whether they have one or more tax liens and the types of these.

3. Create a **story map** that summarizes the problem that PLA wants to tackle. In specific, the pressure of development in neighborhoods in Philadelphia with a great number of vacant properties, both showing the city-wide spatial patterns of vacant lots, delinquencies and zoning permits issued, as well as zooming into certain locations that describe or exemplify the effects of development in detail. In this sense This map is intended to be used as an advocacy tool that can be easily shared.

4. Build a **map dashboard** that displays all the vacant properties in Philadelphia and their development related characteristics (from the data mentioned in item #2). The dashboard will also be able to filter the properties displayed by certain characteristics, for example: the amount of debt or their delinquent status. This way, the user of the map can both explore city-wide trends as well as looking for specific properties or neighborhoods they are interested in.


***

## The application

From the goals above mentioned, my final MUSA 611 project will address the last two.

The story map component is already under way, as it was the basis for my midterm submission. However, it needs to undergo three simple changes:

* to be transformed into a land page with navigation buttons that can jump straight to the map dashboard.

* to edit the content of the slides so that it better explains the problem at hand, both visually and narratively.

* to change the map library from Leaflet to Mapbox so that layers with larger sets of points can be displayed.


For the map dashboard, it is necessary to develop a script that fetches the [**vacancies**](https://www.opendataphilly.org/dataset/vacant-property-indicators), [**property tax delinquencies**]( https://www.opendataphilly.org/dataset/property-tax-delinquencies) and [**real estate transfers data**]( https://www.opendataphilly.org/dataset/real-estate-transfers), among other possible data sets, from the City of Philadelphia’s Open Data API and summarizes the relevant information by property on a marker tooltip. Some data sets that have been more difficult to obtain from direct sources in the city, such as the historical Sheriff Sales, might be needed to wrangle and access statically.

Finally, as an optional feature, the client requested that they would like the website to be available in Spanish so that it can be accessible to a greater share of residents and especially North Philly residents whose English understanding might be limited. For this I would create a duplicate set of texts that could be switched from English to Spanish with a button on the header.

