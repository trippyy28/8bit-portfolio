import React, { useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import { data } from "./data";
const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid;
  margin: 3px;
`;
const VIEW_ALL = "All";
const Portfolio = () => {
  const products = data;
  const [selectedGenre, setGenre] = useState(VIEW_ALL);
  const genres = _.uniq(_.map(products, "genre"));
  genres.unshift(VIEW_ALL);
  return (
    <div className="container p-3 d-flex flex-column h-150 mx-auto">
      <div className="container nes-container mb-4">
        <div className="col-md-12">
          <h1 className="d-flex justify-content-center">Gallery</h1>
        </div>
        <div className="col-md-12 mb-4">
          <select
            onChange={(e) => setGenre(e.target.value)}
            onBlur={(e) => setGenre(e.target.value)}
          >
            {genres.map((genre) => (
              <option value={genre}>{genre}</option>
            ))}
          </select>
        </div>
        <div className="row mb-4">
          <div className="m-auto nes-pointer col-md-4">
            {products
              .filter(
                ({ genre }) =>
                  selectedGenre === VIEW_ALL || genre === selectedGenre
              )
              .map((product) => (
                <Product
                  title={product.title}
                  id={product.id}
                  genre={product.genre}
                  img={product.img}
                  moreInfo={product.moreInfo}
                >
                  <a href={product.link}>{product.title}</a>
                  <p className="descr">{product.moreInfo}</p>
                  <img width={100} height={100} src={product.img} alt="1" />
                </Product>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
