# Dashboard

- '/dashboard'
  - status of current orders (local and remote) ✅
  - list of bookings and events for current day ❌

# Login ✅

- '/login'
  - login and password fields
  - login button (link to dashboard)

# Table booking

- '/tables' ❌
  - choose date and hour
  - tabel with list of bookings and events
    - 1 column = 1 table
    - 1 row = 30 min.
    - similar to 1 week of google calendar (days are different tables)
    - click on booking or event link to datails page
- '/tables/booking/:id' ❌
  - All info about booking
  - Allow to edit / save changes
- '/tables/booking/new' ❌
  - Allow to edit / save changes
- '/tables/events/:id/' ❌
  - All info about event
  - Allow to edit / save changes
- '/tables/events/new' ❌
  - Allow to edit / save changes

# Waiter's view

- '/waiter' ✅
  - tabel
    - row = table
    - columns (status, time from last status change, available actions)
- '/waiter/order/new' ❌
  - table number (editable)
  - menu of products
  - product options
  - order (products with options and price)
  - order price
- '/waiter/order/:id' ❌
  - same as prev (with set settings + editable)

# Kitchen's view

- '/kitchen' ❌
  - list of orders in order
    - table nr / remote nr
    - order info
  - edit order status (as ready)
