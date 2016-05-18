Template.BlogEntries.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('blogEntries');
	});
});

Template.BlogEntries.helpers({
	blogEntries: ()=> {
		return BlogEntries.find({});
	}
})