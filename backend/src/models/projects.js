const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: Date,
    technologies: [String],
    teamMembers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Assuming you have a User model
      },
    ],
    status: {
      type: String,
      enum: ["Planning", "In Progress", "Completed","pending","ACTIVE"],
      default: "Planning",
    },
    tasks: [
      {
        title: {
          type: String,
       
        },
        description: String,
        status: {
          type: String,
          enum: ["Not Started", "In Progress", "Completed"],
          default: "Not Started",
        },
      },
    ],
    client: {
      name: String,
      contactPerson: String,
      contactEmail: String,
    },
    budget: {
      currency: String,
      amount: Number,
    },
    duration: {
      value: Number,
      unit: {
        type: String,
        enum: ["days", "weeks", "months"],
      },
    },
    milestones: [
      {
        title: String,
        description: String,
        dueDate: Date,
      },
    ],
    attachments: [
      {
        fileName: String,
        url: String,
      },
    ],
    notes: String,
    risks: [
      {
        description: String,
        probability: Number,
        impact: String,
        mitigation: String,
      },
    ],
    feedback: [
      {
        date: Date,
        from: String,
        message: String,
      },
    ],
    projectLinks: [
      {
        title: String,
        url: String,
      },
    ],
    tags: [String],
    privacy: {
      type: String,
      enum: ["Public", "Private"],
      default: "Public",
    },
    completionPercentage: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    repository: String,
    deploymentURL: String,
    collaborators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    communicationChannels: [
      {
        platform: String,
        link: String,
      },
    ],
    customFields: {
      field1: String,
      field2: Number,
      field3: Boolean,
    },
  },
  { timestamps: true }
);

const Projects = mongoose.model("Projects", projectSchema);

module.exports = Projects;
