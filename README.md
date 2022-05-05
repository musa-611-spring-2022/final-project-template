# MUSA611 Final Project Proposal


## Team Member

Shimin Tu

## Objective

As an international student, I was really confused the first time I wanted to send a package in America and I have some questions:

- What kinds of shipping services can I choose?
- Where are those shipping facilities?
- Which shipping facility is closest to me?
- How can I contact them?
- When can I send a package?
- ...

In order to tackle those problems and provide shipping instructions for residents in Philadephia, especially those who are coming here for the first time, I am going to develop a web page where people can not only have an understanding of shipping facilities in Philadelphia but also find the most appropriate shipping facilities based on filtering! The web can also be played as guidance for people whose jobs heavily rely on shipping when they are planning to rent a house.

## Project Plan

- A map showing the distribution of all shipping facilities and their specific information in Philly.
- A set of pages showing the information of shipping facilities of each community.
- A web page where users can filter shipping facilities based on zip, type of shipping service, available time, census tract...
- A web page that will recommend several closest shipping facilities based on users' location. Users can also input any places of interest.
- Present the distance between users' location and shipping facilities, and maybe provide short guidance on how to get there.
- Present the number of shipping facilities per capita of each census tract with another layer presenting the median household income.
- ...

## Data Source

[USPS](https://postalpro.usps.com/gis/json_psv_files)  
COLLECTION_BOX_NUMBER, ADDRESS_LOCATION, CITY, STATE, ZIPCODE, BOX_TYPE, BOX_LOCATION_DESCRIPTION, SERVICE_CLASS, LOCATION_TYPE, LONGITUDE, LATITUDE, PICKUPTIMES( DAYS, TIMES)

[DHL](https://hifld-geoplatform.opendata.arcgis.com/datasets/geoplatform::dhl-facilities/explore?location=38.795628%2C-113.596928%2C4.00)  
Name, Type, Address, City, State, Latitude, Longitude, Matchstatus, Placement, Census_Code, Zip, Last_Pickup, Location_TY

[UPS](https://hifld-geoplatform.opendata.arcgis.com/datasets/ups-facilities/explore?location=46.045091%2C61.547472%2C3.58)  
Name, Address, City, State, Phone, Latitude, Longitude, Matchstatus, Placement, Cencus_Code, Business_Name, Zip

[FedEx](https://hifld-geoplatform.opendata.arcgis.com/datasets/fedex-facilities/explore?location=40.046251%2C-113.396056%2C4.00)  
Name, Type, Address, City, State, Latitude, Longitude, Matchstatus, Placement, Census_Code, Zip

[Neighborhood](https://www.opendataphilly.org/dataset/philadelphia-neighborhoods)  

[Zip](https://www.opendataphilly.org/dataset/zip-codes)  

[Census Data]()
