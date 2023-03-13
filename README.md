# Admin UI

AdminUI is a responsive and customizable admin panel built using the React library for admin to see and delete users. The users is provided via an API. It provides an easy-to-use interface for managing various aspects of an application or website, including various features as follows:-

## Required Features for AdminUI Challenge:
  
  * Column titles is displayed in bold and larger font size compared to the entries to make them stand out and easily distinguishable.
  * A search bar is placed at the top of the table that can filter any property or column in the table.
  * Edit and delete icons is provided at the end of each row. Clicking on the edit icon will enable the user to edit the row data in place. Clicking on the delete icon will remove the row from the table.
  * Pagination buttons is displayed at the bottom of the table. The pagination will update based on the search/filtering applied to the table. Each page will contain 10 rows, and the pagination buttons will only show the number of pages required based on the available data in the table.
  * Users can select one or multiple rows by clicking on the checkbox provided on the left side of each row. The selected row(s) will be highlighted with a grayish background color, and users can delete the selected rows using the 'Delete Selected' button located at the bottom left corner of the table.
  * A checkbox is placed on the top left corner of the table that will select or deselect all the displayed rows on the current page. This checkbox will not apply to all 50 rows, only the ten rows displayed on the current page.

## Installation

To install and run AdminUI locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/chandramohan0/adminui.git
```

2. Install dependencies:

```
cd adminui
npm install
```

3. Start the development server:

```
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Testing

AdminUI uses the Jest testing framework and React Testing Library for unit and integration testing.

To run the tests, use the following command:

```
npm test
```

## Contributing

Contributions to AdminUI are welcome! If you find a bug or have a feature request, please open an issue.

If you would like to contribute code, please fork the repository and submit a pull request. Make sure to follow the contributing guidelines and the code of conduct. 
