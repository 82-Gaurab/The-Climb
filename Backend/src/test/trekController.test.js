const Trek = require("../model/trekSchema"); // Mocked later
const trekController = require("../controller/trekController");

jest.mock("../model/trekSchema", () => ({
  create: jest.fn((data) => Promise.resolve({ ...data, trekId: 1 })),
  findAll: jest.fn(() =>
    Promise.resolve([
      {
        trekId: 1,
        title: "Everest Base Camp",
        region: "Solukhumbu",
        difficulty: "Hard",
        duration: 12,
        price: 1200.0,
        description: "A challenging trek to the base of Mount Everest.",
        image: "everest.jpg",
      },
    ])
  ),
  findByPk: jest.fn((id) =>
    Promise.resolve(
      id == 1
        ? {
            trekId: 1,
            title: "Everest Base Camp",
            region: "Solukhumbu",
            difficulty: "Hard",
            duration: 12,
            price: 1200.0,
            description: "A challenging trek to the base of Mount Everest.",
            image: "everest.jpg",
            toJSON: function () {
              return this;
            },
          }
        : null
    )
  ),
  destroy: jest.fn((query) => Promise.resolve(query.where.trekId == 1 ? 1 : 0)),
}));

describe("Trek Controller", () => {
  let req, res;

  beforeEach(() => {
    req = { body: {}, params: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      json: jest.fn(),
    };
  });

  test("should create a new trek", async () => {
    req.body = {
      title: "Everest Base Camp",
      region: "Solukhumbu",
      difficulty: "Hard",
      duration: 12,
      price: 1200.0,
      description: "A challenging trek to the base of Mount Everest.",
      image: "everest.jpg",
    };

    await trekController.create(req, res);

    expect(Trek.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith({
      data: expect.objectContaining({
        trekId: 1,
        title: "Everest Base Camp",
      }),
      message: "successfully created trek",
    });
  });

  test("should get all treks", async () => {
    await trekController.getAllTrek(req, res);

    expect(Trek.findAll).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({ trekId: 1 }),
        ])
      );
      
  });

  test("should get a trek by ID", async () => {
    req.params.id = "1";

    await trekController.getTrekById(req, res);

    expect(Trek.findByPk).toHaveBeenCalledWith("1");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      data: expect.objectContaining({ trekId: 1 }),
    });
  });

  test("should return 404 if trek not found", async () => {
    req.params.id = "99"; // Invalid trekId

    await trekController.getTrekById(req, res);

    expect(Trek.findByPk).toHaveBeenCalledWith("99");
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: "Trek not found" });
  });

  test("should delete a trek", async () => {
    req.params.id = "1";

    await trekController.deleteTrek(req, res);

    expect(Trek.destroy).toHaveBeenCalledWith({ where: { trekId: "1" } });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ message: "Trek deleted successfully" });
  });

  test("should return 404 when deleting a non-existent trek", async () => {
    req.params.id = "99"; // Non-existing trek

    await trekController.deleteTrek(req, res);

    expect(Trek.destroy).toHaveBeenCalledWith({ where: { trekId: "99" } });
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: "Trek not found" });
  });
});
