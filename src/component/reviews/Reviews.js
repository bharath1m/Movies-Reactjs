import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react'

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId();

        useEffect(()=>{
            getMovieData(movieId);
        },[])

        const addReview = async(e) =>{
            e.preventDefault();

            const rev= revText.current;

            try{
                const response = await api.post("/api/v1/reviews", {reviewBody:rev.value,imdbId:movieId});

                const updateReviews = [...reviews, {body:rev.value}];

                rev.value="";

                setReviews(updateReviews);
            }
            catch(err)
            {
                console.log(err);
            }
        }

  return (
    <Container>
        <Row>
            <col><h3>Reviews</h3></col>
        </Row>
        <Row className="mt-2">
            <col>
            <img src={movie?.poster} alt=""/>
            </col>
            <col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText="write a review?"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                    <hr/>
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r=>{
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr/>
                                    </Col>
                                </Row>
                            </>
                        )
                    }))
                }
            </col>
            <Row>
                            <Col>
                                    <hr/>
                            </Col>
                        </Row>
        </Row>
    </Container>

  )
}

export default Reviews
