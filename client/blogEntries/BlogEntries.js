Template.BlogEntries.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('blogEntries');
	});
});

Template.BlogEntries.helpers({
	blogEntries: ()=> {
		return BlogEntries.find({});
	}});

Template.BlogEntries.events({
	'click .newBlogEntry': () => {
		Session.set('newBlogEntry', true);
	}
});

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});