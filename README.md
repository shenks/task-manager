# Task Management Application

Overview: A simple task management application with edit and delete capabilities.

## Setup and Running Locally

1. **Clone the Repository:**

   ```bash
   git clone <repository_url>

   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd <project_directory>

   ```

3. **Install Dependencies:**

   ```bash
   npm install

   ```

4. **Run the application Locally:**

   ```bash
   npm start

   ```

5. **Accessing the Application:**
   You can access the application by visiting http://localhost:3000 in your web browser.

## Assumptions

1.  **Able to change state of existing tasks:**
    While creating the app, I assumed that modifying the state of existing tasks would be simple. However, when attempting to edit the properties of a task, issues arose in synchronizing the UI and underlying data model, especially the date data type that caused several errors.

2.  **Task Completion status:**
    While the task requirements mention including a due date for tasks, it wasn't specified if a 'status' property was required. On reflection, it should have been included during my planning to enable task status functionality (upcoming & not completed, overdue & not completed, completed)

3.  **LocalStorage Usage (not implemented):**
    The task requirements specify storing task data locally using browser storage. The initial assumption was that there was no need for data validation or error handling related to localStorage, as it's assumed to work as long as there were not errors.
