
const list = [
    {
        "key": 'SG01',
        "title": 'The same approved simulation program used for the baseline/budget and proposed design models',
        "tags": ['ASHRAE 140', 'Standard 140', 'EnergyPlus', 'DOE-2', 'eQUEST', 'IES-VE', 'TRNSYS', 'EnergyPro', 'DesignBuilder', 'OpenStudio', 'TRACE', 'IESVE', 'IES'],
        "checkHref": 'content/6_3_simulation-general.html#sg01'
    },
    {
        "key": 'SG02',
        "title": 'Project climate zone reported in the Compliance Form is established correctly',
        "tags": ['ASHRAE 169', 'Standard 169', 'Climate Zone', 'Climate'],
        "checkHref": 'content/6_3_simulation-general.html#sg02'
    },
    {
        "key": 'SG03',
        "title": 'The same approved weather file used in the baseline/budget and proposed simulation',
        "tags": ['Weather File', 'Climate Data', 'TMY', 'EPW', 'Climatic Data'],
        "checkHref": 'content/6_3_simulation-general.html#sg03'
    },
    {
        "key": 'SG04',
        "title": 'The reported project floor area is consistent with the design documents',
        "tags": ['Floor Area', 'Gross Floor Area', 'Project Area', 'Conditioned', 'Semi-Heated', 'Unconditioned', 'New Construction', 'Alteration', 'Addition', 'Existing to Remain', 'Not Enclosed', 'Unenclosed'],
        "checkHref": 'content/6_3_simulation-general.html#sg04'
    },
    {
        "key": "SG05",
        "title": "The Modeled Floor Area is as Reported in the Compliance Form and the Same Between Budget/Baseline and Proposed Design",
        "tags": ['Floor Area', '# of Floors', 'Number of floors'],
        "checkHref": "content/6_3_simulation-general.html#sg05"
    },
    {
        "key": "SG06",
        "title": "The Correct Number of Hours Per Year Was Explicitly Modeled",
        "tags": ['8760', '8,760', '# of Hours', 'Number of hours', '1400', '1,400', 'leap year'],
        "checkHref": "content/6_3_simulation-general.html#sg06"
    },
    {
        "key": "SG07",
        "title": "The Number of Unmet Load Hours Reported in the Compliance Form Does Not Exceed the Prescribed Limits",
        "tags": ['Unmet hours', '300', 'UMLH'],
        "checkHref": "content/6_3_simulation-general.html#sg07"
    },
    {
        "key": "SG08",
        "title": "The Number of Unmet Load Hours Reported in the Compliance Form Reflects Simulation Results",
        "tags": ['Unmet hours', '300', 'UMLH'],
        "checkHref": "content/6_3_simulation-general.html#sg08"
    },
    {
        "key": "SG09",
        "title": "Energy Use Reported in the Compliance Form Matches Simulation Reports",
        "tags": ['kWh', 'Therm', 'MMBtu', 'GJ', 'Energy Use', 'Energy Consumption', 'Energy'],
        "checkHref": "content/6_3_simulation-general.html#sg09"
    },
    {
        "key": "SG10-P",
        "title": "Site Energy Use Intensity (EUI) of the Proposed Design is Generally Consistent with the Selected Benchmark",
        "tags": ['EUI', 'Energy Use Intensity', 'Benchmark', 'Site EUI', '“Acceptable Difference Before QC Flag”', 'deviation'],
        "checkHref": "content/6_3_simulation-general.html#sg10-p"
    },
    {
        "key": "SG10-B",
        "title": "Site Energy Use Intensity (EUI) of the Budget/Baseline Design is Generally Consistent with the Selected Benchmark",
        "tags": ['EUI', 'Energy Use Intensity', 'Benchmark', 'Site EUI', '“Acceptable Difference Before QC Flag”', 'deviation'],
        "checkHref": "content/6_3_simulation-general.html#sg10-b"
    },
    {
        "key": "SG11-P",
        "title": "Modeled Interior Lighting Energy Use of the Proposed Design is Generally Consistent with the Selected Benchmark, with the Difference Less Than Set Threshold",
        "tags": ['Wattage', '"Acceptable Difference Before QC Flag"', 'Lighting', 'Interior Lighting', 'Benchmark', 'Lighting Power Density', 'LPD'],
        "checkHref": "content/6_3_simulation-general.html#sg11-p"
    },
    {
        "key": "SG11-B",
        "title": "Modeled Interior Lighting Energy Use in the Baseline/Budget Design is Generally Consistent with the Selected Benchmark, with Difference Less Than Set Threshold",
        "tags": ['Wattage', '"Acceptable Difference Before QC Flag"', 'Lighting', 'Interior Lighting', 'Benchmark', 'Lighting Power Density', 'LPD'],
        "checkHref": "content/6_3_simulation-general.html#sg11-b"
    },
    {
        "key": "SG12",
        "title": "Modeled Energy Use Intensity of the Miscellaneous and Process Loads in the Baseline/Budget Design is Generally Consistent with the Selected Benchmark, with the Difference Less Than the Set Threshold",
        "tags": ['Wattage', '"Acceptable Difference Before QC Flag"', 'Miscellaneous', 'Process', 'Plug', 'Equipment', 'Benchmark', 'Plug Load', 'Process Load', 'limits'],
        "checkHref": "content/6_3_simulation-general.html#sg12"
    },
    {
        "key": "SG13",
        "title": "Modeled Heating Energy Use in the Proposed and Baseline/Budget Design is Generally Consistent with the Selected Benchmark, with the Difference Less Than the Set Threshold",
        "tags": ['Space Heating', 'Heating', 'Energy Use', 'Benchmark', 'Heating Energy'],
        "checkHref": "content/6_3_simulation-general.html#sg13"
    },
    {
        "key": "SG14",
        "title": "Modeled Cooling Energy Use in the Proposed and Baseline/Budget Design is Generally Consistent with the Selected Benchmark, with the Difference Less Than the Set Threshold",
        "tags": ['Space Cooling', 'Cooling', 'Energy Use', 'Benchmark', 'Cooling Energy'],
        "checkHref": "content/6_3_simulation-general.html#sg14"
    },
    {
        "key": "SG15",
        "title": "Modeled HVAC Fans Energy Use in the Proposed and Baseline/Budget Design is Generally Consistent with the Selected Benchmark, with the Difference Less Than the Set Threshold",
        "tags": ['Fan', 'Energy Use', 'Benchmark', 'HVAC Fan'],
        "checkHref": "content/6_3_simulation-general.html#sg15"
    },
    {
        "key": "SG16",
        "title": "Modeled HVAC Pumps Energy Use in the Proposed and Baseline/Budget Design is Generally Consistent with the Selected Benchmark, with the Difference Less Than the Set Threshold",
        "tags": [],
        "checkHref": "content/6_3_simulation-general.html#sg16"
    },
    {
        "key": "SG17",
        "title": "Modeled Heat Rejection Energy Use in the Proposed and Baseline/Budget Design is Generally Consistent with the Selected Benchmark, with the Difference Less Than the Set Threshold",
        "tags": [],
        "checkHref": "content/6_3_simulation-general.html#sg17"
    },
    {
        "key": "SG18",
        "title": "Modeled Service Water Heating Energy Use in the Baseline/Budget and Proposed Design is Generally Consistent with the Selected Benchmark, with the Difference Less Than the Set Threshold",
        "tags": [],
        "checkHref": "content/6_3_simulation-general.html#sg18"
    },
    {
        "key": "SG19",
        "title": "Modeled Elevator Energy Use in the Baseline/Budget and Proposed Design is Generally Consistent with the Selected Benchmark, with the Difference Less Than the Set Threshold",
        "tags": [],
        "checkHref": "content/6_3_simulation-general.html#sg19"
    },
    {
        "key": "SG20",
        "title": "Compliance Outcome is Established Correctly",
        "tags": [],
        "checkHref": "content/6_3_simulation-general.html#sg20"
    },
    {
        "key": "UR01",
        "title": "The utility rate for electricity, natural gas and other applicable energy sources are based on the approved source",
        "tags": [],
        "checkHref": "content/6_4_utility-rates.html#ur01"
    },
    {
        "key": "UR02",
        "title": "The difference between the average (virtual) modeled budget/baseline and proposed utility rates for electricity, natural gas and other applicable energy sources are as expected.",
        "tags": [],
        "checkHref": "content/6_4_utility-rates.html#ur02"
    },
    {
        "key": "UR03",
        "title": "The modeled utility rates for electricity, natural gas and other fuels applicable to the project are as reported in the Compliance Form and are the same in the baseline/budget and proposed design model.",
        "tags": [],
        "checkHref": "content/6_4_utility-rates.html#ur03"
    },
    {
        "key": "BE01-B",
        "title": "Thermal properties of the baseline/budget above-grade walls are established correctly.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be01-b"
    },
    {
        "key": "BE01-P",
        "title": "Thermal properties of the exterior walls in the proposed design are established correctly.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be01-p"
    },
    {
        "key": "BE02-P",
        "title": "Thermal properties of the proposed below-grade walls are established correctly.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be02-p"
    },
    {
        "key": "BE03-P",
        "title": "Thermal properties of the proposed roof are established correctly.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be03-p"
    },
    {
        "key": "BE04-P",
        "title": "Thermal properties of the proposed exterior floors are established correctly.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be04-p"
    },
    {
        "key": "BE05-P",
        "title": "Thermal properties of the proposed slab-on-grade floor are established correctly.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be05-p"
    },
    {
        "key": "BE06",
        "title": "Modeled U-factors and areas of the baseline/budget and proposed above-grade walls are as reported in the Compliance Form.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be06"
    },
    {
        "key": "BE02-B",
        "title": "Thermal properties of the baseline/budget below-grade walls are established correctly.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be02-b"
    },
    {
        "key": "BE03-B",
        "title": "Thermal properties of the baseline/budget roof are established correctly.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be03-b"
    },
    {
        "key": "BE04-B",
        "title": "Thermal properties of the baseline/budget exterior floors are established correctly.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be04-b"
    },
    {
        "key": "BE05-B",
        "title": "Thermal properties of the baseline/budget slab-on-grade floor are established correctly.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be05-b"
    },
    {
        "key": "BE07",
        "title": "Modeled C-factors and areas of the baseline/budget and proposed below-grade walls are as reported in the Compliance Form.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be07"
    },
    {
        "key": "BE08",
        "title": "Modeled U-factors and areas of the baseline/budget and proposed roof are as reported in the Compliance Form.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be08"
    },
    {
        "key": "BE09",
        "title": "Modeled U-factors and areas of the baseline/budget floor is as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be09"
    },
    {
        "key": "BE10",
        "title": "Modeled F-factors and areas of the baseline/budget slab-on-grade are as reported in the Compliance Form.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be10"
    },
    {
        "key": "BE11-B",
        "title": "Baseline/Budget roof and above grade wall reflectance and thermal emittance are established correctly in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be11-b"
    },
    {
        "key": "BE11-P",
        "title": "Proposed design roof and above grade wall reflectance and thermal emittance reported in the Compliance Form reflect design documents",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be11-p"
    },
    {
        "key": "BE12",
        "title": "Baseline/Budget and proposed roof and above grade wall reflectance and thermal emittance are modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be12"
    },
    {
        "key": "BE13-B",
        "title": "Fenestration area in the baseline/budget design is established correctly",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be13-b"
    },
    {
        "key": "BE13-P",
        "title": "Fenestration area in the proposed design reported in the Compliance Form reflects design documents",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be13-p"
    },
    {
        "key": "BE14",
        "title": "Modeled fenestration areas for the baseline/budget and proposed design are as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be14"
    },
    {
        "key": "BE15-B",
        "title": "Baseline/budget fenestration U-factor, SHGC and VT reported in the Compliance Form are established correctly",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be15-b"
    },
    {
        "key": "BE15-P",
        "title": "Proposed fenestration properties are established correctly",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be15-P"
    },
    {
        "key": "BE16",
        "title": "Modeled U-factor, SHGC and VLT of the baseline/budget and proposed fenestration are as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be16"
    },
    {
        "key": "BE17-B",
        "title": "Baseline/budget infiltration rate reported in the Compliance Form is established correctly",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be17-b"
    },
    {
        "key": "BE17-P",
        "title": "Proposed infiltration rate reported in the Compliance Form is established correctly.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be17-p"
    },
    {
        "key": "BE18",
        "title": "Baseline/budget and proposed modeled infiltration rate reflects the values reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be18"
    },
    {
        "key": "BE19",
        "title": "Change in the proposed versus baseline/budget total annual and design loads from envelope components is reasonable given the difference in the proposed versus baseline/budget envelope parameters reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be19"
    },
    {
        "key": "BE20-B",
        "title": "The baseline/budget building performance is an average of four orientations, if required",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be20-b"
    },
    {
        "key": "BE20-P",
        "title": "Proposed building orientation reflected in the Compliance Form is as specified",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be20-p"
    },
    {
        "key": "BE21",
        "title": "Baseline/budget and proposed building orientation is modeled as reported in the Compliance Form.",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be21"
    },
    {
        "key": "BE22-P",
        "title": "Proposed interior and exterior shading is established correctly in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be22-p"
    },
    {
        "key": "BE22-B",
        "title": "Baseline/Budget interior and exterior shading is established correctly in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be22-b"
    },
    {
        "key": "BE23",
        "title": "Baseline/Budget and proposed interior shading is modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be23"
    },
    {
        "key": "BE24-P",
        "title": "Proposed envelope complies with minimum mandatory envelope requirements",
        "tags": [],
        "checkHref": "content/6_5_building-envelope.html#be24-p"
    },
    {
        "key": "LI01",
        "title": "The floor area used in the lighting calculations is consistent with the reported project floor area.",
        "tags": [],
        "checkHref": "content/6_6_lighting-interior.html#li01"
    },
    {
        "key": "LI02-P",
        "title": "Proposed lighting power reported in the Compliance Form reflects design documents for spaces where lighting is fully specified",
        "tags": [],
        "checkHref": "content/6_6_lighting-interior.html#li02-p"
    },
    {
        "key": "LI03-P",
        "title": "Proposed LPD to be modeled for spaces where lighting is not specified or partially specified is established correctly in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_6_lighting-interior.html#li03-p"
    },
    {
        "key": "LI03-B",
        "title": "Baseline/budget Lighting Power Density (LPD) is established correctly in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_6_lighting-interior.html#li03-b"
    },
    {
        "key": "LI04",
        "title": "Proposed lighting controls reported in the Compliance Form reflect design documents",
        "tags": [],
        "checkHref": "content/6_6_lighting-interior.html#li04"
    },
    {
        "key": "LI05-P",
        "title": "Specified lighting controls meet mandatory requirements in 90.1 Section 9",
        "tags": [],
        "checkHref": "content/6_6_lighting-interior.html#li05-p"
    },
    {
        "key": "LI05-B",
        "title": "Baseline/budget lighting controls are established correctly in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_6_lighting-interior.html#li05-b"
    },
    {
        "key": "LI06",
        "title": "Modeled interior lighting peak demand is consistent with the baseline interior lighting wattage reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_6_lighting-interior.html#li06"
    },
    {
        "key": "LI07",
        "title": "Baseline/budget and proposed wattage entered into simulation tool reflects values reported in the Compliance Form.",
        "tags": [],
        "checkHref": "content/6_6_lighting-interior.html#li07"
    },
    {
        "key": "LI08",
        "title": "Occupancy sensor controls in the baseline/budget and proposed design are modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_6_lighting-interior.html#li08"
    },
    {
        "key": "LI09",
        "title": "Daylighting controls in the baseline/budget and proposed design are modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_6_lighting-interior.html#li09"
    },
    {
        "key": "LI10",
        "title": "Modeled interior lighting runtime hours are realistic",
        "tags": [],
        "checkHref": "content/6_6_lighting-interior.html#li10"
    },
    {
        "key": "LI11",
        "title": "The difference in the interior lighting annual energy use of the baseline(budget) and proposed design is reasonable",
        "tags": [],
        "checkHref": "content/6_6_lighting-interior.html#li11"
    },
    {
        "key": "LE01-B",
        "title": "Baseline/Budget exterior lighting Power is established correctly in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_7_lighting-exterior.html#le01-b"
    },
    {
        "key": "LE01-P",
        "title": "Proposed exterior lighting power reported in the Compliance Form reflects design documents.",
        "tags": [],
        "checkHref": "content/6_7_lighting-exterior.html#le01-p"
    },
    {
        "key": "LE02-P",
        "title": "Specified exterior lighting meets 90.1 mandatory requirements.",
        "tags": [],
        "checkHref": "content/6_7_lighting-exterior.html#le02-p"
    },
    {
        "key": "LE03",
        "title": "Modeled baseline/budget and proposed exterior lighting power reflects the wattages reported in the Compliance Form.",
        "tags": [],
        "checkHref": "content/6_7_lighting-exterior.html#le03"
    },
    {
        "key": "LE04-P",
        "title": "Exterior lighting controls reported in the Compliance Form reflect design documents",
        "tags": [],
        "checkHref": "content/6_7_lighting-exterior.html#le04-p"
    },
    {
        "key": "LE04-B",
        "title": "Exterior lighting controls reported in the Compliance Form for the baseline/budget design are established correctly",
        "tags": [],
        "checkHref": "content/6_7_lighting-exterior.html#le04-b"
    },
    {
        "key": "LE05-P",
        "title": "Specified exterior lighting controls meet 90.1 mandatory requirements",
        "tags": [],
        "checkHref": "content/6_7_lighting-exterior.html#le05-p"
    },
    {
        "key": "LE06",
        "title": "Modeled exterior lighting runtime hours in the proposed design are reasonable",
        "tags": [],
        "checkHref": "content/6_7_lighting-exterior.html#le06"
    },
    {
        "key": "LE07",
        "title": "Difference between the baseline/budget and proposed exterior lighting energy is as expected",
        "tags": [],
        "checkHref": "content/6_7_lighting-exterior.html#le07"
    },
    {
        "key": "PPO01",
        "title": "The difference between the modeled baseline/budget and proposed misc. equipment and process energy use is as expected",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo01"
    },
    {
        "key": "PPO02-P",
        "title": "Proposed design miscellaneous unregulated plug and process loads reported in the Compliance Form are as expected.",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo02-p"
    },
    {
        "key": "PPO02-B",
        "title": "Miscellaneous unregulated baseline/budget plug and process loads reported in the Compliance Form are the same as proposed unless allowed to differ.",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo02-b"
    },
    {
        "key": "PPO03",
        "title": "Miscellaneous unregulated plug and process load schedules reported in the Compliance Form for the baseline/budget design are the same as for the proposed design unless allowed to differ.",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo03"
    },
    {
        "key": "PPO04",
        "title": "Miscellaneous plug and process loads are modeled as reported in the Compliance Form.",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo04"
    },
    {
        "key": "PPO05-P",
        "title": "Regulated commercial refrigerators & freezers reported in the Compliance Form for the proposed design reflect design documents",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo05-p"
    },
    {
        "key": "PPO05-B",
        "title": "Baseline/budget design for the regulated commercial refrigerators & freezers reported in the Compliance Form is established correctly",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo05-b"
    },
    {
        "key": "PPO06",
        "title": "Regulated refrigerators and freezers are modeled as reported in the Compliance Form for the baseline/budget and proposed design.",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo06"
    },
    {
        "key": "PPO07-P",
        "title": "Regulated Motors reported in the Compliance Form for the proposed design reflect design documents",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo07-p"
    },
    {
        "key": "PPO07-B",
        "title": "Regulated Motors reported in the Compliance Form for the baseline/budget design are established correctly",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo07-b"
    },
    {
        "key": "PPO08",
        "title": "Regulated Motors are modeled as reported in the Compliance Form for the baseline/budget and proposed design.",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo08"
    },
    {
        "key": "PPO09-P",
        "title": "Elevators reported in the Compliance Form for the proposed design reflect design documents",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo09-p"
    },
    {
        "key": "PPO09-B",
        "title": "Elevators reported in the Compliance Form for the baseline/budget design are established correctly",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo09-b"
    },
    {
        "key": "PPO10",
        "title": "Elevators are modeled as reported in the Compliance Form for the baseline/budget and proposed design.",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo10"
    },
    {
        "key": "PPO11-P",
        "title": "Combined Heat and Power (CHP) systems reported in the Compliance Form for the proposed design reflect design documents and electricity generation and recovered energy reported in submittal is reasonable.",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo11-p"
    },
    {
        "key": "PPO11-B",
        "title": "CHP systems reported in the Compliance Form for the baseline/budget design are established correctly",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo11-b"
    },
    {
        "key": "PPO12",
        "title": "CHP systems are modeled as reported in the Compliance Form for the baseline/budget and proposed design.",
        "tags": [],
        "checkHref": "content/6_8_plug-process-other-loads.html#ppo12"
    },
    {
        "key": "SWH01",
        "title": "Proposed SWH system type, efficiency and capacity reported in the Compliance Form reflects design documents",
        "tags": [],
        "checkHref": "content/6_9_service-water-heating.html#swh01"
    },
    {
        "key": "SWH02-P",
        "title": "Proposed SWH system efficiency reported in the Compliance Form meets the mandatory requirements of 90.1 Section 8.",
        "tags": [],
        "checkHref": "content/6_9_service-water-heating.html#swh02-p"
    },
    {
        "key": "SWH02-B",
        "title": "Baseline/budget SWH system type, efficiency and capacity reported in the Compliance Form is established correctly",
        "tags": [],
        "checkHref": "content/6_9_service-water-heating.html#swh02-b"
    },
    {
        "key": "SWH03-P",
        "title": "The ancillary components of the proposed SWH system reported in the Compliance Form reflect design documents",
        "tags": [],
        "checkHref": "content/6_9_service-water-heating.html#swh03-p"
    },
    {
        "key": "SWH03-B",
        "title": "Ancillary components of the baseline/budget SWH system reported in the Compliance Form are established correctly",
        "tags": [],
        "checkHref": "content/6_9_service-water-heating.html#swh03-b"
    },
    {
        "key": "SWH04-P",
        "title": "Proposed service hot water demand reported in the Compliance Form is reasonable.",
        "tags": [],
        "checkHref": "content/6_9_service-water-heating.html#swh04-p"
    },
    {
        "key": "SWH04-B",
        "title": "Difference between the baseline/budget and proposed hot water demand reported in the Compliance Form is as allowed",
        "tags": [],
        "checkHref": "content/6_9_service-water-heating.html#swh04-b"
    },
    {
        "key": "SWH05",
        "title": "Modeled baseline/budget and proposed SWH system type, efficiency, capacity and ancillary features reflect parameters reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_9_service-water-heating.html#swh05"
    },
    {
        "key": "SWH06",
        "title": "Difference in the baseline/budget and proposed hot water use is reasonable based on the system parameters reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_9_service-water-heating.html#swh06"
    },
    {
        "key": "SWH07",
        "title": "Modeled proposed SWH effective full load hours are reasonable",
        "tags": [],
        "checkHref": "content/6_9_service-water-heating.html#swh07"
    },
    {
        "key": "AHVAC01-P",
        "title": "Thermal blocks are established correctly",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac01-p"
    },
    {
        "key": "AHVAC02",
        "title": "Thermal blocks are modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac02"
    },
    {
        "key": "AHVAC03-P",
        "title": "All specified air-side HVAC systems are reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac03-p"
    },
    {
        "key": "AHVAC03-B",
        "title": "Baseline/budget system types reported in the Compliance Form are established correctly",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac03-b"
    },
    {
        "key": "AHVAC04",
        "title": "All baseline/budget and proposed air-side HVAC systems reported in the Compliance Form are modeled.",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac04"
    },
    {
        "key": "AHVAC05-P",
        "title": "Heating and cooling types and capacities of the proposed air-side HVAC systems reported in the Compliance Form reflect Design Documents.",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac05-p"
    },
    {
        "key": "AHVAC05-B",
        "title": "Heating and cooling types and capacities of the baseline/budget air-side HVAC systems reported in the Compliance Form are established correctly",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac05-b"
    },
    {
        "key": "AHVAC06",
        "title": "Heating and cooling capacities of the air-side HVAC systems are modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac06"
    },
    {
        "key": "AHVAC07-P",
        "title": "Reported air-side HVAC systems cooling and heating efficiencies reflect design documents.",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac07-p"
    },
    {
        "key": "AHVAC08-P",
        "title": "Cooling and heating efficiencies of the specified air-side HVAC systems meet the mandatory minimums in 90.1 Section 6",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac08-p"
    },
    {
        "key": "AHVAC08-B",
        "title": "Baseline/budget air-side systems’ heating and cooling efficiencies reported in the Compliance Form are established correctly",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac08-b"
    },
    {
        "key": "AHVAC09-P",
        "title": "Modeling inputs for the proposed heating and cooling efficiency are provided in the Compliance Form and established correctly",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac09-p"
    },
    {
        "key": "AHVAC09-B",
        "title": "Modeling inputs for the baseline/budget heating and cooling efficiency are provided in the Compliance Form and established correctly",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac09-b"
    },
    {
        "key": "AHVAC10-P",
        "title": "The heating & cooling performance curves used in the proposed design simulation are based on an approved source",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac10-p"
    },
    {
        "key": "AHVAC10-B",
        "title": "The heating & cooling performance curves used in the baseline/budget design simulation are based on an approved source",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac10-b"
    },
    {
        "key": "AHVAC11",
        "title": "Modeled heating and cooling efficiency of the air-side systems reflect values reported in the Compliance",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac11"
    },
    {
        "key": "AHVAC12",
        "title": "Annual average realized DX cooling and heating system efficiencies reflect expected performance at the range of actual conditions",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac12"
    },
    {
        "key": "AHVAC13",
        "title": "Average realized heating efficiency of air-side systems reflect expected performance.",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac13"
    },
    {
        "key": "AHVAC14-P",
        "title": "Design supply, return, relief and exhaust fans’ flow rates reported in the Compliance Form are as specified in the Design Documents",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac14-p"
    },
    {
        "key": "AHVAC14-B",
        "title": "Baseline/budget design fans flow rates reported in the Compliance Form are established correctly",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac14-b"
    },
    {
        "key": "AHVAC15-P",
        "title": "Design supply, return, relief and exhaust fan power reported in the Compliance Form is as specified in the design documents",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac15-p"
    },
    {
        "key": "AHVAC15-B",
        "title": "Baseline/budget fan power reported in the Compliance Form is established correctly",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac15-b"
    },
    {
        "key": "AHVAC16-P",
        "title": "Air flow and supply temperature controls reported in the Compliance Form for the proposed design are as specified in the design documents",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac16-p"
    },
    {
        "key": "AHVAC16-B",
        "title": "Baseline (budget) air flow and supply temperature control is established correctly",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac16-b"
    },
    {
        "key": "AHVAC17-P",
        "title": "Fan power performance curves reported for the proposed design in the Compliance Form are based on an approved source",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac17-p"
    },
    {
        "key": "AHVAC17-B",
        "title": "Fan power performance curves used in the simulation are based on an approved source",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac17-b"
    },
    {
        "key": "AHVAC18",
        "title": "Fan power, flow rate and controls are modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac18"
    },
    {
        "key": "AHVAC19",
        "title": "Modeled peak demand of ventilation fans is generally consistent with design fan power and control reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac19"
    },
    {
        "key": "AHVAC20",
        "title": "Modeled equivalent full load hours of the ventilation fans are as expected.",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac20"
    },
    {
        "key": "AHVAC21-P",
        "title": "Air-side economizers reported in the Compliance Form are as specified in the design documents",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac21-p"
    },
    {
        "key": "AHVAC21-B",
        "title": "Air-side economizers reported in the Compliance Form for the baseline/budget systems are established correctly",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac21-b"
    },
    {
        "key": "AHVAC22",
        "title": "Air-side economizers in the baseline/budget and proposed design is modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac22"
    },
    {
        "key": "AHVAC23-P",
        "title": "Design ventilation rates reported in the Compliance Form are consistent with the design documents",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac23-p"
    },
    {
        "key": "AHVAC23-B",
        "title": "Baseline/budget ventilation rates reported in the Compliance Form are established correctly",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac23-b"
    },
    {
        "key": "AHVAC24-P",
        "title": "Demand control ventilation reported in the Compliance Form for the proposed design is consistent with the design documents",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac24-p"
    },
    {
        "key": "AHVAC25-P",
        "title": "Demand control ventilation reported in the Compliance Form for the proposed design meets mandatory requirements in 90.1 Section 6",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac25-p"
    },
    {
        "key": "AHVAC25-B",
        "title": "Demand control ventilation reported in the Compliance Form for the baseline/budget design is established correctly.",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac25-b"
    },
    {
        "key": "AHVAC26",
        "title": "Ventilation rate and control are modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac26"
    },
    {
        "key": "AHVAC27-P",
        "title": "Exhaust air energy recovery reported in the Compliance Form reflects design documents",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac27-p"
    },
    {
        "key": "AHVAC27-B",
        "title": "Exhaust air energy recovery reported in the Compliance Form for the budget/baseline design is established correctly",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac27-b"
    },
    {
        "key": "AHVAC28",
        "title": "Modeled exhaust air energy recovery is as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac28"
    },
    {
        "key": "AHVAC29-P",
        "title": "Additional HVAC efficiency measures reported in the Compliance Form are allowed for trade-off and reflect design documents",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac29-p"
    },
    {
        "key": "AHVAC30-P",
        "title": "Additional HVAC efficiency measures were modeled for the proposed design as described in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac30-p"
    },
    {
        "key": "AHVAC31",
        "title": "Modeled monthly patterns of heating and cooling loads are as expected with no excessive simultaneous heating and cooling",
        "tags": [],
        "checkHref": "content/6_10_airside-hvac.html#ahvac31"
    },
    {
        "key": "WHVAC01-P",
        "title": "Proposed chillers reported in the Compliance Form reflect design documents and meet the minimum efficiency requirements.",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac01-p"
    },
    {
        "key": "WHVAC01-B",
        "title": "Properties of the baseline/budget chillers reported in the Compliance Form are established correctly",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac01-b"
    },
    {
        "key": "WHVAC02",
        "title": "Chillers are modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac02"
    },
    {
        "key": "WHVAC03",
        "title": "Average annual realized chiller efficiency is as expected",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac03"
    },
    {
        "key": "WHVAC04-P",
        "title": "Proposed chilled water loop configuration and temperature controls reported in the Compliance Form reflect design documents.",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac04-p"
    },
    {
        "key": "WHVAC04-B",
        "title": "Baseline/budget chilled water loop configuration and temperature controls reported in the Compliance Form are established correctly",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac04-b"
    },
    {
        "key": "WHVAC05",
        "title": "Chilled water loop configuration and temperature controls are modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac05"
    },
    {
        "key": "WHVAC06-P",
        "title": "Proposed chilled water pump system parameters reported in the Compliance Form reflect design documents",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac06-p"
    },
    {
        "key": "WHVAC06-B",
        "title": "Baseline/budget chilled water pump system parameters reported in the Compliance Form are established correctly",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac06-b"
    },
    {
        "key": "WHVAC07",
        "title": "CHW pumps are modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac07"
    },
    {
        "key": "WHVAC08",
        "title": "CHW loops flow control is modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac08"
    },
    {
        "key": "WHVAC09",
        "title": "Modeled annual chilled water pump energy is as expected",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac09"
    },
    {
        "key": "WHVAC1O-P",
        "title": "Proposed heat rejection system reported in the Compliance Form reflects design documents",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac1O-p"
    },
    {
        "key": "WHVAC1O-B",
        "title": "Baseline/budget heat rejection system reported in the Compliance Form is established correctly",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac1O-b"
    },
    {
        "key": "WHVAC11",
        "title": "Heat rejection system is modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac11"
    },
    {
        "key": "WHVAC12-P",
        "title": "Proposed space heating boilers reported in the Compliance Form reflect design documents and meet the minimum efficiency requirements",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac12-p"
    },
    {
        "key": "WHVAC12-B",
        "title": "Properties of the space heating boilers in the budget/baseline design reported in the Compliance Form are established correctly",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac12-b"
    },
    {
        "key": "WHVAC13",
        "title": "Space heating boilers are modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac13"
    },
    {
        "key": "WHVAC14",
        "title": "Average annual realized boiler efficiency is as expected",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac14"
    },
    {
        "key": "WHVAC15-P",
        "title": "Proposed hot water loop configuration temperature controls reported in the Compliance Form reflect design documents",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac15-p"
    },
    {
        "key": "WHVAC15-B",
        "title": "Budget/baseline hot water loop configuration and temperature controls reported in the Compliance Form are established correctly",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac15-b"
    },
    {
        "key": "WHVAC16",
        "title": "Hot water loops temperature controls are modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac16"
    },
    {
        "key": "WHVAC17-P",
        "title": "Proposed hot water pump system parameters reported in the Compliance Form reflect design documents",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac17-p"
    },
    {
        "key": "WHVAC17-B",
        "title": "Baseline/budget hot water pumps reported in the Compliance Form are established correctly",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac17-b"
    },
    {
        "key": "WHVAC18",
        "title": "Hot water pumps are modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac18"
    },
    {
        "key": "WHVAC19",
        "title": "Hot water loops flow control is modeled as reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac19"
    },
    {
        "key": "WHVAC20",
        "title": "Modeled annual hot water pump energy is as expected",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac20"
    },
    {
        "key": "WHVAC21",
        "title": "Pump energy use is reported on the Compliance Calculations tab if applicable.",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac21"
    },
    {
        "key": "WHVAC22",
        "title": "Modeled budget/baseline and proposed heating energy use by fuel is consistent with heating energy source reported in the Compliance Form",
        "tags": [],
        "checkHref": "content/6_11_waterside-hvac.html#whvac22"
    },
    {
        "key": "RE01",
        "title": "The renewable electricity generation systems reported in the Compliance Form reflect design documents",
        "tags": [],
        "checkHref": "content/6_12_renewable-energy.html#re01"
    },
    {
        "key": "RE02",
        "title": "The renewable thermal energy systems reported in the Compliance Form reflect design documents",
        "tags": [],
        "checkHref": "content/6_12_renewable-energy.html#re02"
    },
    {
        "key": "RE03",
        "title": "Savings from renewable energy savings reported in the Compliance Form are substantiated",
        "tags": [],
        "checkHref": "content/6_12_renewable-energy.html#re03"
    },
    {
        "key": "RE04",
        "title": "Contribution of renewable energy toward compliance does not exceed the allowed limit",
        "tags": [],
        "checkHref": "content/6_12_renewable-energy.html#re04"
    },
    {
        "key": "RE05",
        "title": "Prescriptive on-site renewable energy requirements reported in the Compliance Form are established correctly",
        "tags": [],
        "checkHref": "content/6_12_renewable-energy.html#re05"
    },
    {
        "key": "EC01",
        "title": "Documentation submitted for each exceptional calculation method reported in the Compliance Form meets 90.1 requirements.",
        "tags": [],
        "checkHref": "content/6_13_exceptional-calculations.html#ec01"
    },
    {
        "key": "EC02",
        "title": "Calculation methodology is acceptable and inputs reflect specified systems and equipment",
        "tags": [],
        "checkHref": "content/6_13_exceptional-calculations.html#ec02"
    },
    {
        "key": "EC03",
        "title": "Contribution of exceptional calculations toward compliance does not exceed the allowed limits",
        "tags": [],
        "checkHref": "content/6_13_exceptional-calculations.html#ec03"
    }
]


updateHREFs();

const options = {
    keys: ['key', 'title', 'tags'],
    threshold: 0.3,
    includeScore: true
};

const fuse = new Fuse(list, options);

// Initialize search on the Index page
// Other pages this will have no effect because on load the search input is not present
window.addEventListener('load', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }
});

window.addEventListener('load', function() {
    // Check if the URL has a hash (i.e., an anchor link)
    if (window.location.hash) {
        const targetAnchor = window.location.hash.substring(1); // Remove the '#' from the hash
        const targetElement = document.getElementById(targetAnchor);

        if (targetElement) {
            const headerHeight = document.querySelector('#header-container').offsetHeight;
            const scrollPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    }
});

function isInContentFolder() {
    const currentPath = window.location.pathname;
    return currentPath.includes('/content/');
}

function updateHREFs() {
    const prependPath = isInContentFolder() ? '../' : '';

    list.forEach(item => {
        item.checkHref = prependPath + item.checkHref;
    });
}

function performSearch(query) {
    const allResults = fuse.search(query);
    const previewResults = allResults.slice(0, 4); // initial preview
    const dropdownResults = document.getElementById('dropdownResults');
    dropdownResults.innerHTML = '';

    // reset sizing
    dropdownResults.style.maxHeight = '';
    dropdownResults.style.overflowY = '';

    if (query && allResults.length > 0) {
        // show the top 4 items
        previewResults.forEach(result => {
            const a = document.createElement('a');
            a.href = result.item.checkHref;
            a.classList.add('dropdown-item', 'list-group-item');

            const boldKey = document.createElement('strong');
            boldKey.textContent = result.item.key + ' ';
            a.appendChild(boldKey);
            a.appendChild(document.createTextNode(result.item.title));

            a.addEventListener('click', function(event) {
                event.preventDefault();

                const targetHref = a.getAttribute('href');
                const targetId = targetHref.split('#')[1];
                const targetElement = document.getElementById(targetId);

                let lastSegment = targetHref.substring(targetHref.lastIndexOf('/') + 1);
                lastSegment = lastSegment.split('#')[0];
                localStorage.setItem('activeLink', lastSegment);

                if (targetElement) {
                    const headerHeight = (document.querySelector('#header-container') || { offsetHeight: 0 }).offsetHeight;
                    const scrollPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
                } else {
                    window.location.href = targetHref;
                }
            });

            dropdownResults.appendChild(a);
        });

        // Add "View All Results" button if more exist
        if (allResults.length > 4) {
          const viewAll = document.createElement('button');
          viewAll.type = 'button';
          viewAll.textContent = `View All Results (${allResults.length})`;
          viewAll.classList.add('dropdown-item', 'list-group-item', 'text-center', 'fw-semibold');

          // Prevent Bootstrap from auto-closing due to focus/inside click
          viewAll.addEventListener('mousedown', (e) => {
            e.preventDefault();   // keep focus on input; avoids blur-triggered close
            e.stopPropagation();  // don't bubble to Bootstrap's handler
          });
          viewAll.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Expand to full list
            dropdownResults.innerHTML = '';
            allResults.forEach(result => {
              const a = document.createElement('a');
              a.href = result.item.checkHref;
              a.classList.add('dropdown-item', 'list-group-item');

              const boldKey = document.createElement('strong');
              boldKey.textContent = result.item.key + ' ';
              a.appendChild(boldKey);
              a.appendChild(document.createTextNode(result.item.title));
              dropdownResults.appendChild(a);
            });

            // Make long lists scrollable
            dropdownResults.style.maxHeight = '60vh';
            dropdownResults.style.overflowY = 'auto';

            // Ensure dropdown stays open after clicking View All
            dropdownResults.classList.add('show');
          });

          dropdownResults.appendChild(viewAll);

          // Size dropdown to fit exactly 4 results + button (no scroll)
          requestAnimationFrame(() => {
            const items = dropdownResults.querySelectorAll('.dropdown-item');
            let needed = 0;
            items.forEach(el => needed += el.getBoundingClientRect().height);
            dropdownResults.style.maxHeight = `${needed + 8}px`;
            dropdownResults.style.overflowY = 'hidden';
          });
        }

        dropdownResults.classList.add('show');
    } else {
        dropdownResults.classList.remove('show');
    }
}