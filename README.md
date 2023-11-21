TODO:

13th nov - start

21st:
/-----------------------------------------------/

1. Fill the db with Tours(create 12 more), set RLS Rules,
   -- Finish Featured Tours Cards - render from db, redesign + avg.rating,

2. Create Tour Details Page
   -- Info button on Tour leads to THIS tour; Book Button Leads to checkout page;

3. Create All Tours Page
   -- Sorting and filtering - client or server side? React Query or Router?;
   -- Sorting by: duration(short-long), price(cheap-expensive), group size(small-large), level(easy-extreme);
   -- Filtering by: duration(to 3 days, to 7 days, 7+days), price(allow set the min and max price), group size, level;
   -- Load More button ?

4. Implement authentication;
5. add 404 page;
6. error boundary from router;

- Create use(tours, stories, availability, users, etc,) - make data ready.

- All Tours Page:

- Tour Details Page:

  - Section with available dates? -
    -- with reviews for this tour;

- After press on Book button:

  - 1st checkout step - create account/login or continue without one;
    -- 2nd step A - go to checkout page without signing in, where user needs to fill up all the details: full name, email, phone;
    -- 2nd step B - fills up the form for login or press on create account :
    --- b1 - after succesfull login redirected to checkout with fields prefilled with data used for registration.
    --- b2 - redirected to create account and after succsesfull redirected to checkout; _When creating account from any other place - after success redirected to account page._

    - Checkout form:

      1. First Name
      2. Last name
      3. email
      4. Phone Number
      5. Billing address ?

    - Payment with stripe;
    - Redirect to Success Page;

- Create acc page:
  - List of Booked Tours;
    - Upcoming Tours;
    - Past Tours;
    - When clicked on one of the past tours - gets to Tour Details page and gets a message that now user can write a review for this tour.
