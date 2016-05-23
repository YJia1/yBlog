Template.MyBlogEntries.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('blogEntries');
		self.subscribe('userList');
	});
});

Template.MyBlogEntries.helpers({
	BlogEntries: ()=> {
		console.log(Meteor.userId());
		return BlogEntries.find({user: Meteor.userId()});
	}
});

Template.MyBlogEntries.events({
	'click .newBlogEntry': () => {
		Session.set('newBlogEntry', true);
	}
});