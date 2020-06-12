// View data
d3.json("samples.json").then( (data)=>{
    console.log(data);
});
​
// Initialize Page
function init(){
    d3.json("samples.json").then((data)=>{
​
        // Create dropdown Menu
        // Use select.append to add options w/ texts and value
​
        // Build charts and metadata for the first sample aka first "name" in names array
​
        // Create bar chart for the first subject in the data
​
        // Get the variables necessary to create bar plot
        var values = data.samples[0].sample_values;
        var labels = data.samples[0].otu_ids;
        var hovertext = data.samples[0].otu_labels;
​
        // Use slice to get the top 10 values & reverse to make bars stack greatest to smallest
        
        // Create your bar chart using plotly
​
        // Bubble plot
​
        // Insert metadata into panel for first subject
​
        var mData = d3.select("#sample-metadata");
        // choose first subject's metadata to get selectedMetadata
        // selectedMetadata --> Append something for each
        // Use Object.entries to iterate over selectedMetata
    });
}
​
// Update plots and metadata for newly selected value
function optionChanged(selectValue){
    d3.json("samples.json").then((data)=> {
        // Filter data by matching id for samples to the selectValue
        
        // Update values for barchart
        // Use restlye to update bar chart
        plotly.restyle("bar", update);
        
        // Update values for bubbleplot
        // Use restyle to update bubbleplot
​
        
        // Build metadata based on the filter
    });
}
​
init();
Collapse



:heart:
1

