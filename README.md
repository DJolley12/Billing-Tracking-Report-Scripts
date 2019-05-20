# Billing-Tracking-Report-Scripts
gas code for billing department
Pulls data from a google spreadsheet, and rewrites it daily at 6 pm to another sheet for the current month in a formatted fashion. If there is not a sheet made already, the program will automatically generate one, then write to it. It does the same thing with the year folder the file is in.
The data is dynamically assigned by keywords found in the data source sheet, then found on the template sheet. Keywords are sensitive to spelling errors.
