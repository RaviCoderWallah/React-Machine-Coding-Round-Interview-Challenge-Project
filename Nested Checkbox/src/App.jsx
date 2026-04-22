const checkBoxData = [
  {
    id: 1,
    title: "p1",
    children: [
      {
        id: 2,
        title: "p1-c1",
        children: [
          {
            id: 3,
            title: "p1-c1-c1",
            children: []
          },
          {
            id: 4,
            title: "p1-c1-c2",
            children: [
              {
                id: 5,
                title: "p1-c1-c2-c1",
                children: []
              },
              {
                id: 6,
                title: "p1-c1-c2-c2",
                children: [
                  {
                    id: 7,
                    title: "p1-c1-c2-c2-c1",
                    children: []
                  },
                  {
                    id: 8,
                    title: "p1-c1-c2-c2-c2",
                    children: []
                  }
                ]
              },
              {
                id: 9,
                title: "p1-c1-c2-c3"
              }
            ]
          }
        ]
      },
      {
        id: 10,
        title: "p1-c2",
        children: []
      },
      {
        id: 11,
        title: "p1-c3",
        children: []
      }
    ]
  },
  {
    id: 12,
    title: "p2",
    children: [
      {
        id: 13,
        title: "p2-c1",
        children: []
      },
      {
        id: 14,
        title: "p2-c2",
        children: []
      }
    ]
  },
  {
    id: 15,
    title: "p3",
    children: [
      {
        id: 16,
        title: "p3-c1",
        children: []
      }
    ]
  },
  {
    id: 17,
    title: "p4",
    children: []
  }
];

const App = () => {
  console.log(checkBoxData);
  return (
    <div className="m-8">
      <h1 className="text-xl">Nested Checkbox</h1>
    </div>
  )
}

export default App