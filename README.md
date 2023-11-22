TODO:

13th nov - start

22nd:
/-----------------------------------------------/

###

4. Implement authentication - Query; Login, logout, signUp - with google & password;
5. add 404 page; \
6. error boundary from router;
7. Create account page;
8. Create All Tours Page
   -- Sorting and filtering - client or server side? React Query or Router?;
   -- Sorting by: duration(short-long), price(cheap-expensive), group size(small-large), level(easy-extreme);
   -- Filtering by: duration(to 3 days, to 7 days, 7+days), price(allow set the min and max price), group size, level;
   -- Load More button ? / Pagination with prefetchinggg

###

Home page:
-- Tour Card - add to favorites;
-- Fetch Stories from db;
-- Subscribe to newsletter;
-- Stories carousel;
-- Featured Tours - carusel;
-- About section - typography redesign;
-- Features section - redesign;
-- Fix static Star Rating --

Details page:
-- Gallery;
-- Save to favorites;
-- Stories - fetch info about author(how?)
-- Increase/Decrease quantity of seats - state management in Router??
------ Available dates wit available seats ??

Account page:
-- Favorite tours;
-- Upcoming Tours;
-- Visited tours;
-- Edit profile - avatar, email, password, name;

Checkout:

- After press on Book button:

  - 1st checkout step - create account/login or continue without one;
    -- 2nd step A - go to checkout page without signing in, where user needs to fill up all the details: full name, email, phone;
    -- 2nd step B - fills up the form for login or press on create account :
    --- b1 - after succesfull login redirected to checkout with fields prefilled with data used for registration. -- _How to pass data about user to checkout ?_
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
