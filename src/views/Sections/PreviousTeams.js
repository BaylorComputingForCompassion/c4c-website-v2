/**
 * @TODO Extract strings from this page into resource file
 */

import React from "react";

import officerList from "../../assets/c4c-officers-previous";
import advisorList from "../../assets/c4c-advisors";

import DefaultAvatar from "assets/img/default-avatar.png";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function PreviousMemberList(props) {
    return (
        <Row>
			{props.list.map(items => {
				<div>
					items.year
				</div>
				{items.officers.map(officer => {
					return (<Col md="4">
						<div className="team-player">
							<img
								alt={`${officer.name} Profile`}
								className="rounded-circle img-fluid img-raised officer-image"
								src={(officer.image && `${process.env.PUBLIC_URL}/profile/${officer.image}`) || DefaultAvatar}
							/>
							<h4 className="title">{officer.name}</h4>
							<p className="category text-info">{officer.title}</p>
							<p>{officer.major}</p>
							<p>{officer.school}</p>
							{officer.linkedin && <Button
								className="btn-icon btn-round"
								color="info"
								href={officer.linkedin}
							>
								<i className="fab fa-linkedin" />
							</Button>}
							{officer.github && <Button
								className="btn-icon btn-round"
								color="info"
								href={officer.github}
							>
								<i className="fab fa-github" />
							</Button>}
						</div>
					</Col>)
				})}
			})}
        </Row>
    );
}

function TeamSection() {
    return (
        <div className="section section-team text-center">
            <Container>
                <h2 className="title">Meet the team</h2>
                <div className="team">
                    <MemberList list={officerList}/>
                    <MemberList list={advisorList}/>
                </div>
            </Container>
        </div>
    );
}

export default TeamSection;
