BlogEntries = new Mongo.Collection('blogEntries');

BlogEntries.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

BlogEntriesSchema = new SimpleSchema({
	title: {
		type: String,
		label: "Title"
	},

	desc: {
		type: String,
		label: "Description",
		autoform: {
		    rows: 5
		}
	},

	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	},

	user: {
		type: String,
		label: "User",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	deleteBlogEntry: function(id) {
		BlogEntries.remove(id);
	}
});

BlogEntries.attachSchema(BlogEntriesSchema);