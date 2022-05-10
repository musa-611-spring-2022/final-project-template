import csv
import json

csvfile = open('plaza home prices.csv', 'r')
jsonfile = open('plaza_home_prices.js', 'w')

fieldnames = ("x","y", "NEAREST HISTORIC PLAZA","HOUSE SALE PRICE","TOTAL SQUARE FEET","AVERAGE AFTERNOON PEAK DECIBELS","AVERAGE MORNING PEAK DECIBELS")
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n')
