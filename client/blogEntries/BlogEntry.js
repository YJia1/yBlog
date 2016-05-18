Template.BlogEntry.helpers({
	updateBlogEntryId: function() {
		return this._id;
	}
});

Template.BlogEntry.events({
	//Delete blog entry when clicking on delete icon
	'click .fa-trash': function(){
		Meteor.call('deleteBlogEntry', this._id);
	},
	'click .fa-pencil': function(){
		Session.set('editMode', !Session.get('editMode'));
	}
});