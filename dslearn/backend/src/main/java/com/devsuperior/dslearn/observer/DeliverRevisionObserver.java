package com.devsuperior.dslearn.observer;

import com.devsuperior.dslearn.entities.Deliver;

public interface DeliverRevisionObserver {
    void onSaveRevison(Deliver deliver);
}
