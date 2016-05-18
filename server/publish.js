Meteor.publish('blogEntries', function(){
	return BlogEntries.find({user: this.userId});
});