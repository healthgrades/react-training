//Test lib dependencies
// var React = require("react/addons");
// var TestUtils = require("react/lib/ReactTestUtils");
// var jasmineReact = require("jasmine-react-helpers");

// var HGContentCard =  require("../HGContentCard");


// var contentJson = {
// 	id: "",
// 	types: ['http://schema.org/Article'],
// 	properties: {
// 		contentUrl: ["http://healthgrades.com/article//title"],
// 		promoImage: ["https://d33ljpvc0tflz5.cloudfront.net/dims3/MMH/thumbnail/270x150%3E/quality/75/?url=http%3A%2F%2Fd26ua9paks4zq.cloudfront.net%2Fe7%2F55%2F87bf9b1f4fb78a1223006d080543%2Fresizes%2F500%2Fimage-couple-visiting-doctor.jpg"],
// 		title: ["Title"],
// 		blurb: ["blurbage"]
// 	}
// }


// var testHandleClick = function(){ console.log('test click') }

describe("Hg Content Card Test", function(){
	//test content card instance	
	// var contentCard = TestUtils.renderIntoDocument(<HGContentCard cardJson={contentJson} handleClick={testHandleClick} ></HGContentCard>);

	// describe("content card renderIntoDocument", function(){
	// 	it("should render content card component", function(){
	// 		expect( contentCard.getDOMNode().className ).toEqual('hg3-content-card');
	// 	});
	// });

	// describe("content card elements set", function(){
	// 	it("should have prop cardJson", function(){
	// 		expect(contentCard.props.cardJson).not.toBeUndefined();
	// 		expect(contentCard.props.cardJson).not.toBeNull();
	// 	});

	// 	it("should populate content h4 element", function(){
	// 		var element = TestUtils.findRenderedDOMComponentWithTag(contentCard, "h4");
	// 		expect(element.getDOMNode().textContent).toContain(contentJson.properties.title[0]);
	// 	});

	// 	it("should populate blurb p element", function(){
	// 		var element = TestUtils.findRenderedDOMComponentWithClass(contentCard, "blurb");
	// 		expect(element.getDOMNode().textContent).toContain(contentJson.properties.blurb[0]);
	// 	});

	// 	it("should set img src element", function(){
	// 		var element = TestUtils.findRenderedDOMComponentWithTag(contentCard, "img");
	// 		expect(element.getDOMNode().src).toEqual(contentJson.properties.promoImage[0]);
	// 	});

	// 	it("should set default img src element", function(){
	// 		//get copy of contentJson
	// 		var contentJsonCopy = contentJson;

	// 		//set image null
	// 		contentJsonCopy.properties.promoImage = null;

	// 		//create new card elemetn
	// 		var contentCardDefaultImage = TestUtils.renderIntoDocument(<HGContentCard cardJson={contentJsonCopy} ></HGContentCard>);
			
	// 		//get promo image element
	// 		var element = TestUtils.findRenderedDOMComponentWithTag(contentCardDefaultImage, "img");
			
	// 		//test source
	// 		expect(element.getDOMNode().src).toContain("_icon.png");
	// 	});
	//});

	// describe("content card handleClick prop is set", function(){

	// 	it("should not be undefined", function(){
	// 		expect(contentCard.props.handleClick).not.toBeUndefined();
	// 	});

	// 	it("should not be null", function(){
	// 		expect(contentCard.props.handleClick).not.toBeNull();
	// 	});

	// 	it("should be a function", function(){
	// 		expect(typeof contentCard.props.handleClick).toEqual('function');
	// 	});

	// 	it("should be set to passed in function", function(){
	// 		expect(contentCard.props.handleClick).toEqual(testHandleClick);
	// 	});

	// 	it("should throw if handleClick prop is not a function", function(){
	// 		var foo = function(){
	// 			TestUtils.renderIntoDocument(<HGContentCard cardJson={contentJson} onClick="testthis"></HGContentCard>)
	// 		}
 // 			expect(foo).toThrow();
	// 	});

	// });


	// describe("content card click", function(){
	// 	beforeEach(function(){
	// 		//spy on handleClick funciton
	// 		jasmineReact.spyOnClass(HGContentCard, "handleCardClick");
	// 	});

	// 	it("should call handleClick", function(){
	// 		//render test component
	// 		var testCard = TestUtils.renderIntoDocument(<HGContentCard cardJson={contentJson} handleClick={testHandleClick} ></HGContentCard>);
			
	// 		//simulate click
	// 		TestUtils.Simulate.click(testCard.getDOMNode());

	// 		//check result
	// 		expect(jasmineReact.classPrototype(HGContentCard).handleCardClick).toHaveBeenCalled();
	// 	});
		
	// });
	
});

