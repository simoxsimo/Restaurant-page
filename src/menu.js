const menuPage = ( () => {
  const title = () => 'Menu';
  // create a meal object that contains title, description & price
  const newMeal = (title, description, price) => {
      return {title, description, price};
  }

  const courses = {
      'MAIN COURSES': [newMeal('Braised Lamb', 'with sweet potato, red onion, mushroom, spinach, orange zest, ginger, cardamom and star anise', 130),
      newMeal('Spiced chicken leg', 'with apricots, dates, lemon, ginger and saffron', 120),
      newMeal('Wild caught Moroccan sole', 'with sautéed green vegetables and green chermoula', 160),
      newMeal('Nomad Couscous', 'slow braised preserved lemon infused beef over spiced fresh seasonal vegetables and wheat couscous', 130)
    ],
      'DESSERT MENU': [newMeal('Moroccan Affogato', 'Espresso with Cinnamon, Cardamom and nutmeg over vanilla ice cream and toasted almonds', 60),
      newMeal('Hibiscus infused', 'yoghurt Panna Cotta', 60),
      newMeal('Ultra rich chocolate cake', 'with spiced chocolate ice cream', 80)
    ],
      'COLD STARTERS': [newMeal('Moroccan Gazpacho', 'A variation of the classic Spanish cold soup with the addition of melon and ginger', 60),
      newMeal('Lentil salad', 'with roast beetroot and goat’s cheese from Essaouira', 70),
      newMeal('Sardine tart', 'with green olive tapenade and caramelized onions', 70)
    ],
      'HOT STARTERS': [newMeal('Courgette/Zucchini', 'and feta fritters served with minted yoghurt', 80),
      newMeal('Vegetarian Briouat', 'Moroccan thin pastry filled with spiced tomato and zucchini/courgette with a root vegetable salad', 70)
    ],
      'SIDE DISHES': [newMeal('Oven roasted', 'spiced fennel', 40),
      newMeal('Spiced Green beans', 'with almonds and lemon zest', 40)
    ]}

  return { title, courses }
})();

export default menuPage;