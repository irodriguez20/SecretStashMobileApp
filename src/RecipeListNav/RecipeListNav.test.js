import React from "react";
import RecipeListNav from "./RecipeListNav";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe(`NoteListNav component`, () => {
    it("renders a .NoteListNav by default", () => {
        const wrapper = shallow(<RecipeListNav />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip("renders a link in ul for each folder in array", () => {
        const context = {
            recipes: [
                {
                    id: 4,
                    name: "Salsa",
                    folderid: 2,
                    timetomake: "15min",
                    description: 'A twist on my mother-in-laws homemade salsa. This salsa is delicous and so quick and easy to whip up. Youll never be satisfied with store-bought again. Youll even start critiquing the restaurants.',
                    ingredients: '2 Jalapeños, 2 Seranos, 4 Roma Tomatoes, 1/2 Yellow Onion, Salt to taste, 2 Crushed garlic cloves, 1 bunch of Cilantro',
                    steps: '1. Place the tomatoes and peppers in a pot of water. Let it get to a low boil. Once the skin has split on the tomatoes and the peppers color has faded slightly take the pot off the burner. 2. Spoon out the tomatoes and place them in the blender. Spoon out the peppers and cut the stems off. If you dont want all the seeds, slice the pepper in half and scoop out the seeds. Then place the peppers into the blender. 3. Chop the yellow onion and add it to the blender. 4. Blend until the salsa is smooth and everything is combined. 5. Add salt, blend and taste the salsa. If needed add a bit more salt. 6. Chop a handful of cilantro (taking care not to include stems). Add the cilantro to the blender and pulse until just combined. 7. Pour into a serving dish or tupperware and serve!'
                },
                {
                    id: 5,
                    name: "Grandma Margaritas Tortillas",
                    folderid: 3,
                    timetomake: "1hr 30min",
                    description: 'The best Tortillas youll ever have in your life, created by the greatest woman on Earth. Passed down from many generations, Grandma Margarita always made her Tortillas with love for all of those around her. These must be made with the same love in order to achieve her master piece of Tortillas.',
                    ingredients: '4-5c Flour, 1c cold Crisco, 2T Salt, 2c hot Water',
                    steps: '1.Combine 3c flour and salt in a mixing bowl, then add another 1c of flour. 2.Boil water. 3.Add crisco to the flour and blend with your fingers until evenly combined. 4. Make a well in the center of the flour and pour half of the hot water into the well. 5.Mix the water and the flour together with your hands, beginning to create a dough. 6.Slowly add more water as needed, until the dough looks a little coarse but not sticky. 7.Pinch balls of dough abit bigger than the size of a golf ball. Set in a new bowl. 8.Let rise for 10min and begin heating up your comal/skillet. 9.Roll each dough ball until thin and evenly spread. 10.Before placing on the comal, gently stretch each end of the rolled out tortilla to make sure it will cook evenly. 11.Place on the comal, let first side cook for 5-10sec then flip. Let the second side cook a bit longer, until several golden brown spots appear on that side. Flip and continue on first side for another 5sec. 12.Place each cooked tortilla into a bowl lined with foil and a dry towel or paper towel. Then keep the bowl covered. 13.Serve and enjoy!'
                },
                {
                    id: 6,
                    name: "Colorado Sunrise",
                    folderid: 2,
                    timetomake: "30min",
                    description: 'Made with grapefruit, simple syrup and vodka(optional) this homemade drink is great for Sunday brunch or to unwind after a long day at work. This delicious beverage can be served with alcohol or without.',
                    ingredients: 'Atleast 3 Grapefruit, 1/4c water, 1/4 sugar, vodka (optional)',
                    steps: '1.Add water and sugar to a pot. Heat until boiling low, stirring continuiously. Remove from heat as soon as the sugar has dissolved fully into the water. 2.Cut the grapefruit in half and squeeze the juice into a bowl or pitcher. Tip: to save sometime place a strainer over the bowl/pitcher to catch seeds and pulp. 3.Pour the syrup into the grapefruit juice and stir. 4.If you want to make it alcoholic add the vodka. You can also leave the vodka out and add it to your seperate glass with the juice. 5.Serve and enjoy!'
                }
            ],
            folders: [
                {
                    id: "1",
                    name: "Breakfast"
                },
                {
                    id: "2",
                    name: "Lunch"
                },
                {
                    id: "3",
                    name: "Dinner"
                }
            ]
        };
        const ul = shallow(<RecipeListNav />, context).find("ul");
        expect(toJson(ul)).toMatchSnapshot();
    });
});
