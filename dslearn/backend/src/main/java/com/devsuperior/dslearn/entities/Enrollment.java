package com.devsuperior.dslearn.entities;

import com.devsuperior.dslearn.entities.pk.EnrollmentPK;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name="tb_enrollment")
public class Enrollment {

    @EmbeddedId
    private EnrollmentPK id = new EnrollmentPK();

    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private LocalDate enrollMoment;

    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private LocalDate refundMoment;
    private boolean available;
    private boolean onlyUpdate;

    public Enrollment(){}

    public Enrollment(User user, Offer offer, LocalDate enrollMoment, LocalDate refundMoment, boolean available, boolean onlyUpdate) {
        id.setUser(user);
        id.setOffer(offer);
        this.enrollMoment = enrollMoment;
        this.refundMoment = refundMoment;
        this.available = available;
        this.onlyUpdate = onlyUpdate;
    }

    public User getStudent(){
        return id.getUser();
    }

    public void setStudent(User user){
        id.setUser(user);
    }

    public Offer getOffer() {
        return id.getOffer();
    }

    public void setOffer(Offer offer){
        id.setOffer(offer);
    }

    public LocalDate getEnrollMoment() {
        return enrollMoment;
    }

    public void setEnrollMoment(LocalDate enrollMoment) {
        this.enrollMoment = enrollMoment;
    }

    public LocalDate getRefundMoment() {
        return refundMoment;
    }

    public void setRefundMoment(LocalDate refundMoment) {
        this.refundMoment = refundMoment;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public boolean isOnlyUpdate() {
        return onlyUpdate;
    }

    public void setOnlyUpdate(boolean onlyUpdate) {
        this.onlyUpdate = onlyUpdate;
    }
}
