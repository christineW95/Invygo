- Used Husky for pre-commit hooks
- Used @testing-library for unit test
- Used babel-plugin-module-resolver for module imports
- used react-native-chart-kit for graphs
- used react-native-paper for UI components
- used morphism as mapper functions
- used axios for API calls
- used React Native Features:
- custom hooks
- hooks
- used typescript
- coverage is 73%

# Invygo

Meetup RSVP App
You have an upcoming React Native meetup where you need the participants to RSVP so
that you can prepare appropriate accommodations and transport facilities. The
participants can bring up to two guests along with them.
You also need an admin screen that contains list of all the participants which can be
searched based on their names and locality
The task is to build three screens. (use Drawer Navigator for this)
First Screen
It will have a registration form with following fields:

1. Name
2. Age
3. D.O.B (JS Date object)
4. Profession (can be Employed / Student )
5. Locality
6. Number of Guests (0-2)
7. Address (multiline input upto 50 characters)
   With a submit button you can simply mock a submit API call with services like
   Beeceptor. Also ensure you show an alert to the user if they click back while editing
   the form.
   Second Screen
   Second screen in the drawer should have a searchable list of all the RSVP'd users
   (JSON data can be mocked using a tool like Mockaroo). The list can have the name and
   locality of the RSVP'd user. The entire list should be searchable with a single text
   input by the user's locality and name. Clicking an user in the list will open a new
   screen that contains all the details collected in the first form.
   Third Screen
   The third screen will have useful reports regarding the event. The reports you'll need
   to build are:
8. Number of people in a given age range ( 13-18 , 18-25 and 25+ ).
9. Number of people by localities.
10. Average group size of people attending the event (using guests count). 4. Professionals & students count.
