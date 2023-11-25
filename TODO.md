TODO:

13th nov - start

/-----------------------------------------------/

###

_Account page_:

- Tours Table:
  --- Add sorting /filtering by : upcoming, past, all - mark under the date, make date to show 'from-to'
- Favorite tours
  -- Render cards with favorites;
- Edit profile - avatar, email, password, name;

_All Tours Page_:
-- Sorting and filtering - client or server side? React Query or Router?;
-- Sorting by: duration(short-long), price(cheap-expensive), group size(small-large), level(easy-extreme);
-- Filtering by: duration(to 3 days, to 7 days, 7+days), price(allow set the min and max price), group size, level;
-- Load More button ? / Pagination with prefetchinggg

_Home page_:
-- Tour Card - add to favorites;
-- Fetch Stories from db;
-- Subscribe to newsletter;
-- Stories carousel;
-- Featured Tours - carusel;
-- About section - typography redesign;
-- Features section - redesign;
-- Fix static Star Rating --

_Details page_:
-- Gallery;
-- Save to favorites;
-- Stories - fetch info about author(how?)
-- Increase/Decrease quantity of seats - state management in Router??
------ Available dates wit available seats ??

_Checkout_:

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

_Fixes_
-- Bug with checkbox;
