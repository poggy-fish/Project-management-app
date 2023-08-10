import automationImg from '../src/media/data-ms-illustration.jpeg';
import taskImg from '../src/media/illustration.png';
import manageImg from '../src/media/manage_apps.png';

export const services = {
    taskManagement: {
      title: 'Efficiently Manage Multiple Tasks',
      description: `Assist in managing tasks by creating structures 
      that help you keep track of your tasks, with due dates and priority level.`,
      img: taskImg,
    },
    teamManagement: {
      title: 'Manage Teams and Assign Tasks',
      description: `Work as an organization or team by creating, 
      managing, and assign tasks to be completed by other contributors in your team.`,
      img: manageImg,
    },
    Automation: {
        title: 'Automate Tasks',
        description: `Automatically assign tasks to users based on their roles, 
        streamlining your workflow and ensuring efficient task distribution within your organization.`,
        img: automationImg,
      }
};