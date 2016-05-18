BlogEntries = new Mongo.Collection('blogEntries');

BlogEntriesSchema = new SimpleSchema({
	title: {
		type: String,
		label: "Title"
	},

	desc: {
		type: String,
		label: "Description"
	},

	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		}

	},

	user: {
		type: String,
		label: "User",
		autoValue: function() {
			return this.userId
		}
	}
});

BlogEntries.attachSchema(BlogEntriesSchema);