TODO:

13th nov - start

14th nov:

- Finish base design system: variables, fluid fonts, layouts, \*\*\*
- Create Buttons, \*\*\* inputs, forms,
- Optimize images;
- Find Icons for Features Cards

15th:

- Create Tours, Users, Orders, Reviews, Featured Tours in Supabase //
- Create Featured Tours Cards //
- Create Carousel with cards /
- Create Tours Page ---
- Create Tour Details Page - one page for all tours. Search Params? Other Ways? RTK?-----

16th:

- Create Reviews section
- Create Reviews Grid Carousel 🤨
- Sign Up To newsletter form
- Footer

17th:
/-----------------------------------------------/

- Redux & Redux Tool Kit - how to manage remote state?
- Create use(tours, stories, availability, users, etc,) - make data ready.
- create storage and slices;

- Add RLS rules to supabase;
- Implement authentication;

- add 404 page;
- error boundary from router;

- Finish Featured Tours Cards - render from db, redesign + rating, book button leads to THIS tour;
- Use Remote Data for Stories

- All Tours Page:

  - Sorting and filtering;
    -- Sorting by: duration, price, group size, level;
    -- Filtering by: duration, price, country, group size, level;
    -- Load More button ?

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
