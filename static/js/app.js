// View data
// d3.json("samples.json").then((data) => {
//   console.log(data);
// });

// Initialize Page
function init() {
  d3.json("samples.json").then((data) => {
    // Create dropdown Menu

    // Use select.append to add options w/ texts and value

    // Build charts and metadata for the first sample aka first "name" in names array

    // Get the variables necessary to create bar plot
    // Use slice to get the top 10 values & reverse to make bars stack greatest to smallest
    var sampleValues = data.samples[0].sample_values.slice(0, 10).reverse();
    var sampleIDs = data.samples[0].otu_ids.slice(0, 10).reverse();
    var sampleLabels = data.samples[0].otu_labels.slice(0, 10).reverse();

    var stringIDs = sampleIDs.map(samID =>  `OTU ${samID}`);
    //console.log(sampleIDs);

    // Trace1 for the Greek Data
    var trace1 = {
        x: sampleValues,        //UPDATE THIS
        y: stringIDs,           //UPDATE THIS
        text: sampleLabels,     //UPDATE THIS
        name: "OTU",
        type: "bar",
        orientation: "h"
      };

    // Create bar chart for the first subject in the data
    var layout1 = {
        title: "Belly Button Biodiversity Bar Chart",
        xaxis:{title: "OTU Values"},
        yaxis:{title: "OTU ID"},
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      };
    
    // creating data variable 
    var data1 = [trace1];

    // Create your bar chart using plotly
    Plotly.newPlot("bar", data1, layout1);


    // Bubble plot
    var trace2 = {
      x: data.samples[0].otu_ids,
      y: data.samples[0].sample_values,
      mode: "markers",
      marker: {
          size: data.samples[0].sample_values,
          color: data.samples[0].otu_ids
      },
      text:  data.samples[0].otu_labels

    };

    // set the layout for the bubble plot
    var layout_2 = {
      title: "Belly Button Biodiversity Bubble Plot",
      xaxis:{title: "OTU ID"},
      yaxis:{title: "OTU Values"},
      height: 600,
      width: 1000
    };

    // creating data variable 
    var data2 = [trace2];

    // create the bubble plot
    Plotly.newPlot("bubble", data2, layout_2); 

    // Insert metadata into panel for first subject

    var mData = d3.select("#sample-metadata");
    // choose first subject's metadata to get selectedMetadata
    // selectedMetadata --> Append something for each
    // Use Object.entries to iterate over selectedMetata
  });
}

// Update plots and metadata for newly selected value
function optionChanged(selectValue) {
  d3.json("samples.json").then((data) => {
    // Filter data by matching id for samples to the selectValue

    // Update values for barchart
    // Use restlye to update bar chart
    plotly.restyle("bar", update);

    // Update values for bubbleplot
    // Use restyle to update bubbleplot

    // Build metadata based on the filter
  });
}

init();
