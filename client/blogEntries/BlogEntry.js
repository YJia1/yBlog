Template.BlogEntry.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.BlogEntry.helpers({
	updateBlogEntryId: function() {
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	},
	displayUsername: function(){
		var user = Meteor.users.findOne(this.user);
		var username = user.username;
		//return Meteor.user().username;
		return username;
	}
});

Template.BlogEntry.events({
	//Delete blog entry for current user when clicking on delete icon
	'click .fa-trash': function(){
		console.log(Meteor.user().username);
		if(Meteor.userId()==this.user){
			Meteor.call('deleteBlogEntry', this._id);
		}
	},
	//Open edit mode for blog entry for current user when clicking on edit icon
	'click .fa-pencil': function(event, template){
		if(Meteor.userId()==this.user){
			template.editMode.set(!template.editMode.get());
		}
	}
});