'use strict';

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w-]+/g, '')  // Remove all non-word chars
    .replace(/--+/g, '-')     // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of text
    .replace(/-+$/, '');      // Trim - from end of text
};

module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Clear existing subcategories and categories
    await queryInterface.bulkDelete({ tableName: 'subcategories', schema: 'public' }, null, {});
    await queryInterface.bulkDelete({ tableName: 'categories', schema: 'public' }, null, {});

    // 2. Define categories data
    const categoriesData = [
      {
        name: 'Power Tools',
        subcategories: [
          'Grinders', 'Demolition Breakers', 'Diamond Drills / Core Cutters', 'Drills', 'Rotary Hammers', 
          'Planers', 'Jigsaws', 'Chopsaws', 'Tile Cutters', 'Woodworking', 'Magnetic Drills', 
          'Mitre Saws', 'Automatic Equipment', 'Heat Guns', 'Concrete Vibrators', 'Spray Guns', 
          'Angle Polishers', 'Electric Planers', 'Paint Mixers', 'Palm Sanders'
        ]
      },
      {
        name: 'Cleaning Solutions',
        subcategories: [
          'Cold Water Pressure Washers', 'Wet and Dry Vacuum Cleaners', 'Industrial Vacuum Cleaners', 
          'Ultra High Pressure Washers', 'Walk Behind Scrubber Driers', 'Ride on Scrubber Driers', 
          'Sweepers', 'Industrial Sweepers & Road Sweepers', 'Steam Cleaners', 'Carpet Care', 
          'Special Application Machines', 'V-Robo', 'VSD 300 S8+'
        ]
      },
      {
        name: 'Cordless',
        subcategories: [
          'Impact Drills', 'Impact Drill Kit Sets', 'Cordless Ratchet Wrenches', 'Cordless Screwdrivers', 
          'Cordless Heat Guns', 'Cordless Electric Blowers', 'Cordless Rotary Hammers', 'Cordless Pruners', 
          'Cordless Iron Sheet Scissors', 'Cordless Chainsaws', 'Cordless Tiled Machines', 'Cordless Combo Kitsets', 
          'Cordless Angle Grinders', 'Marble Cutters', 'Electric Drills', 'Demolition Hammers', 
          'Cut off Machines', 'Concrete Vibrators'
        ]
      },
      {
        name: 'Agriculture Machines',
        subcategories: [
          'Weeders', 'Multifunction Cultivators', 'Water Pumps & Lawn Mowers', 'Knapsack Power Sprayers', 
          'Mist Dusters', 'Battery Operated Sprayers', 'Brush Cutters', 'Earth Augers', 'Chainsaws', 
          'Power Sprayers', 'Seeders', 'Chaff Cutters & Reapers', 'Tea Leaf Harvesters', 'Leaf Blowers', 
          'Thermal Fogging Sprayers', 'Battery Pruning Machines', 'Petrol Hedge Trimmers', 'Wood Chippers', 'Manual Seeders'
        ]
      },
      {
        name: 'Lifting Products',
        subcategories: [
          'Chain Blocks', 'Ratchet Lever Hoists', 'Engine Cranes', 'Electric Chain Hoists', 
          'Electric Trolleys', 'CD Hoists', 'KCD Winches (Clutch Winches)', 'Iron Stands / Construction Cranes', 
          'Magnetic Lifters', 'PA Hoists'
        ]
      },
      {
        name: 'Aerial Work Platforms',
        subcategories: [
          'Manual Scissor Lifts', 'Electric Scissor Lifts (Battery)', 'Boom Lifts (Self Propelled)', 
          'Spider Lifts', 'Aerial Work Platforms (Single Mast)', 'Aerial Work Platforms (Double Mast)', 
          'Vertical Masts', 'Truck Mounted'
        ]
      },
      {
        name: 'Construction',
        subcategories: [
          'Stirrup Bending Machines', 'Decoiling Machines', 'Bar Bending Machines', 'Bar Cutting Machines', 
          'Automatic Stirrup Bending Machines', 'Rebar Straightening Machines', 'Rebar Threading Machines', 
          'Iron Workers / Multi Cutters', 'Rebar Sawing Machines', 'Plate Compactors', 'Tamping Rammers', 
          'Vibrating Rollers', 'Concrete Cutters', 'Concrete Roller Screed Pavers', 'Ride on Power Trowels', 
          'Walk Behind Power Trowels', 'Edge Trowels', 'Walk Behind & Stand-on Laser Concrete Levelling Machines', 
          'Zip-800 Suspended Platforms'
        ]
      },
      {
        name: 'Packaging',
        subcategories: [
          'Capping Machines', 'Carton Sealers', 'Conveyors', 'Cup Sealers', 'FFS (Bagger) Machines', 
          'Flow Wrap Machines', 'Hand Sealers', 'Induction Sealing Machines', 'L Sealers & Side Sealers', 
          'Labeling Machines', 'Material Handling Machines', 'Liquid Filler Machines', 'Material Handling Equipment', 
          'Multi Head Weighers', 'Pad Printers', 'Paste Filler Machines', 'Pedal Sealers', 'PFS Fully Automatic', 
          'Printers & Cartridges', 'Shrink Tunnels', 'Strapping Machines', 'Tube Fillers with Printers'
        ]
      },
      {
        name: 'Welding Machines',
        subcategories: [
          'Hutong Series Welding Machines', 'ARC Welding Machines', 'CNC Cutting Machines', 
          'Laser Welding Machines', 'MIG and MAG Welding Machines', 'Plasma Cutter Machines', 'TIG Welding Machines'
        ]
      },
      {
        name: 'MHE (Material Handling Equipment)',
        subcategories: [
          'Hand Pallet Trucks', 'Battery Operated Pallet Trucks (BOPT)', 'Drum Stackers', 'Roller Conveyors', 
          'Manual Stackers', 'Forklifts', 'Electric Pallet Trucks', 'Mobile Loading Dock Ramps', 
          'Order Pickers', 'Scale Pallet Trucks', 'Scissor Pallet Trucks', 'Scissor Tables', 
          'Semi Electric Stackers', 'U Tables', 'Electric Walkie Stackers', 'Electric Stackers with Hoist'
        ]
      }
    ];

    // 3. Insert Categories
    for (const catData of categoriesData) {
      const [categoryId] = await queryInterface.bulkInsert({ tableName: 'categories', schema: 'public' }, [{
        name: JSON.stringify({ en: catData.name }),
        slug: slugify(catData.name),
        description: JSON.stringify({ en: `${catData.name} solutions and equipment.` }),
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      }], { returning: ['id'] });

      const id = typeof categoryId === 'object' ? categoryId.id : categoryId;

      // 4. Insert Subcategories for this category
      const subcategoriesToInsert = catData.subcategories.map(subName => ({
        category_id: id,
        name: JSON.stringify({ en: subName }),
        slug: slugify(`${catData.name}-${subName}`),
        description: JSON.stringify({ en: `${subName} from our ${catData.name} range.` }),
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      }));

      await queryInterface.bulkInsert({ tableName: 'subcategories', schema: 'public' }, subcategoriesToInsert);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete({ tableName: 'subcategories', schema: 'public' }, null, {});
    await queryInterface.bulkDelete({ tableName: 'categories', schema: 'public' }, null, {});
  },
};
