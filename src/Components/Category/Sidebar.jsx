import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import ReactSlider from "react-slider";
import { useState } from "react";

const Sidebar = () => {
  const [openPrice, setOpenPrice] = useState(true);
  const [openProducts, setOpenProducts] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const togglePrice = () => setOpenPrice(!openPrice);
  const toggleProducts = () => setOpenProducts(!openProducts);
  const handlePriceChange = (newRange) => setPriceRange(newRange);

  const [productTypes, setProductTypes] = useState([
    { id: 1, name: "Type 1", checked: false },
    { id: 2, name: "Type 2", checked: false },
    { id: 3, name: "Type 3", checked: false },
    { id: 4, name: "Type 4", checked: false },
    { id: 4, name: "Type 5", checked: false },
    { id: 4, name: "Type 6", checked: false },
    { id: 4, name: "Type 7", checked: false },
    { id: 4, name: "Type 8", checked: false },
    { id: 4, name: "Type 9", checked: false },
    { id: 4, name: "Type 10", checked: false },
    { id: 1, name: "Type 1", checked: false },
    { id: 2, name: "Type 2", checked: false },
    { id: 3, name: "Type 3", checked: false },
    { id: 4, name: "Type 4", checked: false },
    { id: 4, name: "Type 5", checked: false },
    { id: 4, name: "Type 6", checked: false },
    { id: 4, name: "Type 7", checked: false },
    { id: 4, name: "Type 8", checked: false },
    { id: 4, name: "Type 9", checked: false },
    { id: 4, name: "Type 10", checked: false },
  ]);

  const handleChecked = (id) => {
    const updatedTypes = productTypes.map((type) =>
      type.id === id ? { ...type, checked: !type.checked } : type
    );
    setProductTypes(updatedTypes);
  };

  return (
    <div className="max-h-[35%] p-4 border-r border-gray-300 overflow-y-scroll">
      <div className="mb-4 ">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={togglePrice}
        >
          <h3 className="text-lg font-bold">Price</h3>
          {openPrice ? <BiChevronUp /> : <BiChevronDown />}
        </div>
        {openPrice && (
          <div className="mt-2">
            <ReactSlider
              className="w-full h-2 bg-gray-300 rounded-md"
              thumbClassName="w-4 h-4 bg-blue-500 rounded-full cursor-pointer -top-1"
              trackClassName="w-full bg-blue-500"
              min={0}
              max={100000}
              value={priceRange}
              onChange={handlePriceChange}
            />
            <div className="flex justify-between mt-2 text-sm">
              <span>Rs {priceRange[0]}</span>
              <span>Rs {priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleProducts}
        >
          <h3 className="text-lg font-bold">Product Type</h3>
          {openProducts ? <BiChevronUp /> : <BiChevronDown />}
        </div>
        {openProducts && (
          <div className="mt-2">
            {productTypes.map((type) => (
              <label key={type.id} className="mt-2 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={type.checked}
                  onChange={() => handleChecked(type.id)}
                />
                <span className="ml-2">{type.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
