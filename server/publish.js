Meteor.publish('blogEntries', function(){
	return BlogEntries.find({});
});
