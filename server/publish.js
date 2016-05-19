Meteor.publish('blogEntries', function(){
	return BlogEntries.find({});
});

Meteor.publish('userList', function(){
	return Meteor.users.find({});
});