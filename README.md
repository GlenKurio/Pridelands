# Website for Safari Tours.

## Requirements to functionality:

1. Authentication:
   -- Users can create accounts, logIn, LogOut nad Delete their Accounts;

2. Account:
   -- Users can add Tours to favourites, which dispaly in their account;
   -- Users can Update their name, email (with confirmation) and avatar;

3. Tours Page:
   -- Adding to favourites from icon on tour card;
   -- Showing tour details page about tour after click on book on card;
   -- Showing avg rating of the tour on card;

4. Tour Details Page:

   -- Available dates and seats for each date;
   -- Users increase and decrease amount of seats;

5. Checkout:
   -- Ability to checkout for users with account only;

---

**Tech used to build this web app:**

- React(Vanilla JS) + Vite;

- React Router with data layer;

- React-Query for querying data from DB and caching it, sending mutations to DB.

- Supabase: db for storing data:
  --Users;
  --Bookings;
  --Availability;
  --Tours;
  --Favorites;
  --Stories(reviews);
  --Gallery;

- Styling: Styled-Components;

---
